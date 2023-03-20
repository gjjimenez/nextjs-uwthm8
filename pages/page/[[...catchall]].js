import Link from 'next/link';
import Button from 'tdesign/cjs/button';
import dynamic from 'next/dynamic';

export default function AboutPage({ time, ...props }) {
  // const Button = dynamic(() => import(`@containers/${props.componentName}`));

  console.log('props:', props);
  return (
    <div>
      <h1>About us</h1>
      <p>Props: {time}</p>
      <Button icon={<AddIcon />}>新建</Button>
      <div>
        <Link href="/">
          <a>Go back</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const time = new Date().toISOString();
  return {
    props: {
      time,
      componentName: 'Button',
      posts: [
        {
          title: 'Hello World!',
        },
      ],
    },
    revalidate: 10, // In seconds
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { catchall: ['about'] } },
      { params: { catchall: ['Services'] } },
      { params: { catchall: ['/'] } },
      { params: { catchall: ['contact'] } },
      { params: { catchall: ['about'] } },
      { params: { catchall: ['story'] } },
    ],
    fallback: 'blocking',
  };
}

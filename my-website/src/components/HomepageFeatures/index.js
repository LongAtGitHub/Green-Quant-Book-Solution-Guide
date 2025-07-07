import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Quant Green Companion is awesome',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This green quant book guide is awesome. It provides a solid reference point for tackling tricky quant and logic problems in a clean, practical style.
      </>
    ),
  },
  {
    title: 'The Author is Awesome',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The author of this guide site are awesome. He wants to share further insights and solutions more clearly to help you build your problem-solving skills faster.
      </>
    ),
  },
  {
    title: 'Check Out More Work of Mine and Me Later',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        If you enjoyed this, make sure to check out more of my work and follow me later for additional resources, updates, and other interesting math and quant explorations.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

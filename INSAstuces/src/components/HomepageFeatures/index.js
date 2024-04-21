import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/logos/logo2.svg').default,
    description: (
      <>
        Ce site a été créé pour faciliter la vie des étudiants de l'INSA Hauts-de-France
      </>
    ),
  },
  {
    title: 'Maintenu par le Club Info',
    Svg: require('@site/static/img/assos/logo-insash.svg').default,
    description: (
      <>
        Ce site est régulièrement mis-à-jour par ./insash
      </>
    ),
  },
  {
    title: 'Collaboration inter-associations',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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

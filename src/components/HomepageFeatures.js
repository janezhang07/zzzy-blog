import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '省 钱',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        老师与用户直接对接，去除中间一切费用，
        透明价格构成，透明老师真正实力.
      </>
    ),
  },
  {
    title: '省 时',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       只学习最新的，最系统的课程，只跟真正有实力的老师直播互动，把更多的时间用在学习上，而不是浪费在寻找课程，寻找资源上.
      </>
    ),
  },
  {
    title: '省 心',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        追求最真实的学习效果，用不断的更新服务用户.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
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

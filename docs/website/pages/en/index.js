/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

const Cards = (props) => {
  let photo, githubLink = null
  switch (props.name) {
    case "@Lcunha":
      photo = siteConfig.Lucas
      githubLink = siteConfig.LucasGithub
      break
    case "@gleal17":
      photo = siteConfig.Guilherme
      githubLink = siteConfig.GuilhermeGithub
      break
    case "@Henrike100":
      photo = siteConfig.Henrique
      githubLink = siteConfig.HenriqueGithub
      break
    case "@kalliub":
      photo = siteConfig.Kalliu
      githubLink = siteConfig.KalliuGithub
      break
    case "@VictorRodriguesS0":
      photo = siteConfig.Victor
      githubLink = siteConfig.VictorGithub
      break

    default:
      break
  }
  return (
    <a href={githubLink} className="card-foto">
      <img src={photo} alt={props.name}  className="card-foto-perfil" />
      <div className="card-link"></div>
    </a>
  )
}
class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

//inserir banner..
class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
        <img src="./img/banner.jpg" />
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: ' App foi desenvolvido visando atender demandas do público da FGA - Campus da Universidade de Brásilia. Um dos recursos encontrados no Integra é o Rolês! :)',
        title: 'O App Integra',

      },
      {
        content: 'Solução tecnológica que auxilie no gerenciamento e compartilhamento de eventos sociais para os alunos da Universidade de Brasília - UnB. Disponível no App Integra.',
        title: 'O App Roles',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Colaboradores</h2>
    <div className="card-container">
          {siteConfig.members.map(member => <Cards key={member} name={member} />)}
    </div>
  </div>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
        </div>
      </div>
    );
  }
}
module.exports = Index;
const _technologies = [
  {
    title: 'HTML5',
    description: 'Is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current version of the HTML standard',
    icon: require('@/assets/images/iconsTechnologies/html5.svg')
  },
  {
    title: 'CSS3',
    description: 'Is a style sheet language used for describing the presentation of a document written in a markup language',
    icon: require('@/assets/images/iconsTechnologies/css3.svg')
  },
  {
    title: 'JavaScript',
    description: 'Often abbreviated as JS, is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted client-side programming language',
    icon: require('@/assets/images/iconsTechnologies/javascript.svg')
  },
  {
    title: 'Bootstrap',
    description: 'Free toolset for creating websites and web applications. Includes HTML and CSS design templates for typography, web forms, buttons, labels, navigation blocks and other web interface components, including JavaScript extensions',
    icon: require('@/assets/images/iconsTechnologies/bootstrap.svg')
  },
  {
    title: 'Git',
    description: 'Is a version control system (VCS) for tracking changes in computer files and coordinating work on those files among multiple people',
    icon: require('@/assets/images/iconsTechnologies/git.svg')
  },
  {
    title: 'WordPress',
    description: 'Is a free and open-source content management system (CMS) based on PHP and MySQL',
    icon: require('@/assets/images/iconsTechnologies/wordpress.svg')
  },
  {
    title: 'NPM',
    description: 'Is the package manager that is part of Node.js',
    icon: require('@/assets/images/iconsTechnologies/npm.svg')
  },
  {
    title: 'Node.js',
    description: "Is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser",
    icon: require('@/assets/images/iconsTechnologies/nodejs.svg')
  },
  {
    title: 'Photoshop',
    description: 'Is a raster graphics editor developed and published by Adobe Systems for macOS and Windows',
    icon: require('@/assets/images/iconsTechnologies/photoshop.svg')
  }
]

export default {
  getTechnologies (cb) {
    setTimeout(() => cb(_technologies), 100)
  }
}

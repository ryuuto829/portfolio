import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from '@hooks';

const query = graphql`
  query useTranslations {
    allFile(filter: { relativeDirectory: { eq: "translations" } }) {
      edges {
        node {
          name
          childTranslationsJson {
            skip
            home
            title
            subTitle
            greeting
            smallBio
            contactMessage
            downloadResume
            goToMain
            featured
            projectsContent {
              showAll
            }
            blogContent {
              goToBlog
            }
            sectionsHeaders {
              projects
              blog
              about
              contact
              otherProjects
            }
            footerContent {
              rights
              built
              host
            }
            tooltipContent {
              lightMode
              darkMode
              copied
              goToTop
            }
            allProjectsPage {
              title
              subtitle
            }
            page404 {
              pageNotFound
              goHome
            }
          }
        }
      }
    }
  }
`;

// This hook simplifies query response for current language.
// Graphql response should return array of translation for
// all available languages, each item in array MUST HAVE
// ONLY TWO nodes: name and translations.
// This hook then returns this fields without original nesting
// to simplify access to properties in components
const useTranslation = () => {
  const { locale } = useLocale();
  const { allFile } = useStaticQuery(query);

  // Extract all lists from GraphQL query response
  const queryList = allFile.edges.map(item => {
    // We assumed that there are only two fields: one named "name"
    // and other has some name that we should find
    const currentFileTitle = Object.keys(item.node).filter(
      item => item !== 'name'
    )[0];

    return {
      name: item.node.name,
      ...item.node[currentFileTitle]
    };
  });

  // Return translation for the current locale
  return queryList.filter(lang => lang.name === locale)[0];
};

export default useTranslation;

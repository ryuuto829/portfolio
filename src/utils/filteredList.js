// Return list of projects that're matching current language
export const filteredList = (projectList, locale = 'en') => {
  const list = projectList.edges.reduce((filteredList, item) => {
    // Extract file language from the extension of the file name
    const fileLang = item.node.parent.name.split('.')[1];

    if (fileLang === locale)
      filteredList.push({
        ...item.node.frontmatter,
        ...item.node.fields,
        html: item.node.html
      });

    return filteredList;
  }, []);

  return list;
};

// Return list of projects that're matching current language

export const filteredList = (projectList, locale = 'en') => {
  const list = projectList.edges.reduce((filteredList, item) => {
    // Extract file language from the extension of the file name
    const fileLang = item.node.parent.name.split('.')[1];

    // Filter files that matches given languages

    if (fileLang === locale)
      // We create a special node called "html" that will contain
      // plain html string from markdown file
      filteredList.push({ ...item.node.frontmatter, html: item.node.html });

    return filteredList;
  }, []);

  return list;
};

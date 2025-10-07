const modules = import.meta.glob(
  ["../data/*.js", "!../data/template-user.js"],
  { eager: true }
);

// Create an array to store all default exports in a RESTful API format
const dataExports = Object.entries(modules).map(([filePath, module]) => {
  const fileName = filePath
    .split("/")
    .pop()
    .replace(".js", "")
    .replaceAll(" ", "-"); // Extract file name without extension

  return {
    id: fileName, // Use the file name as the ID
    ...module.default, // Spread the default export
  };
});

export default dataExports;

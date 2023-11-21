const projectsTemplate = document.querySelector("#projects-template");
const projectsContainer = document.querySelector("#projects-container");

/**
 * Fetches projects data from a remote JSON file and populates the
 * DOM with the data.
 *
 * @returns {Promise<void>} A Promise that resolves once the projects
 * data has been fetched and the DOM has been updated.
 *
 * @throws {Error} An error is thrown if the projects data cannot be
 * fetched or if there is an error updating the DOM.
 */
async function getProjects() {
  const response = await fetch("./features/open-source/projects.json");
  const data = await response.json();

  // Sort the array of objects based on the 'repo' property
  data.sort((a, b) => {
    const repoA = a.repo.toUpperCase(); // ignore case
    const repoB = b.repo.toUpperCase(); // ignore case

    if (repoA < repoB) {
      return -1;
    }
    if (repoA > repoB) {
      return 1;
    }
    return 0;
  });

  data.forEach(({ description, link, title, tools }) => {
    const instance = projectsTemplate.content.cloneNode(true);
    const linkElement = instance.querySelector("a");
    const titleElement = instance.querySelector(".text-2xl");
    const descriptionElement = instance.querySelector(
      ".text-lg:nth-of-type(1)",
    );

    linkElement.href = link;
    titleElement.innerText = title;
    descriptionElement.innerText = description;

    const tagTemplate = instance.querySelector("#tag-clone");
    const tagsContainer = instance.querySelector("#tags");
    const tags = tools.map((tagName) => {
      const tagInstance = tagTemplate.cloneNode(true);
      tagInstance.id = `tag-${tagName}`;
      tagInstance.textContent = `#${tagName}`;
      return tagInstance;
    });
    tagsContainer.append(...tags);

    const clonedTag = tagsContainer.querySelector("#tag-clone");
    tagsContainer.removeChild(clonedTag);

    projectsContainer.appendChild(instance);
  });
}

window.addEventListener("load", function () {
  getProjects().catch((error) => {
    console.error(error);
  });
});

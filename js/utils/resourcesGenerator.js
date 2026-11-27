import resources from "../data/resources.js";

export default function resourcesGenerator() {

    const resourcesContainer = document.querySelector("#resources-container");
    const buttons = document.querySelectorAll(".resources-tabs button");

    if (!resourcesContainer || !buttons.length) return;

    function showResources(categoryName) {

        const selectedCategory = resources.find((category) => {
            return category.category === categoryName;
        });

        if (!selectedCategory) return;

        const resourceCards = selectedCategory.items.map((resource) => {
            return `
                <a href="${resource.url}"
                   class="resource-card"
                   target="_blank"
                   rel="noopener noreferrer">

                    <h3>${resource.title}</h3>
                    <p>${resource.note}</p>

                </a>
            `;
        });

        resourcesContainer.innerHTML = resourceCards.join("");
    }

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            showResources(button.dataset.category);
        });
    });

    // Mostrar inicialmente la primera categoría
    showResources(buttons[0].dataset.category);
}


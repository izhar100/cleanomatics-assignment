const products = [
    {
        id: 1,
        name: 'Laundry',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClzhxPAqg5OE6BqxGHVC52Uo3oT9QnIJvMkCmZD6y_3VW7IdQE3p3GJUuY8REFFcrcuQ&usqp=CAU',
        description: "Laundry is the process of cleaning and washing clothing, linens, and textiles to remove dirt, stains, and odors. It typically involves using water, detergent, and sometimes specialized treatments to maintain personal and household items in a clean and hygienic condition, ensuring they are fresh and ready for use."
    },
    {
        id: 2,
        name: 'Dry Clean',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClzhxPAqg5OE6BqxGHVC52Uo3oT9QnIJvMkCmZD6y_3VW7IdQE3p3GJUuY8REFFcrcuQ&usqp=CAU',
        description: "Dry cleaning is a specialized textile cleaning method that uses a solvent, typically not water, to remove stains, dirt, and odors from fabrics. This process is ideal for delicate or non-water-resistant materials, such as silk or wool, leaving garments looking fresh and well-maintained without the use of traditional washing and water."
    },
    {
        id: 3,
        name: 'Upholstery',
        image: 'https://banner2.cleanpng.com/20180613/uqi/kisspng-dry-cleaning-laundry-clothing-service-5b21b1b75ecc46.0568764315289348393883.jpg',
        description: "Dry cleaning is a specialized textile cleaning method that uses a solvent, typically not water, to remove stains, dirt, and odors from fabrics. This process is ideal for delicate or non-water-resistant materials, such as silk or wool, leaving garments looking fresh and well-maintained without the use of traditional washing and water."
    },
    {
        id: 4,
        name: 'Stream Ironing',
        image: 'https://banner2.cleanpng.com/20180613/uqi/kisspng-dry-cleaning-laundry-clothing-service-5b21b1b75ecc46.0568764315289348393883.jpg',
        description: "Dry cleaning is a specialized textile cleaning method that uses a solvent, typically not water, to remove stains, dirt, and odors from fabrics. This process is ideal for delicate or non-water-resistant materials, such as silk or wool, leaving garments looking fresh and well-maintained without the use of traditional washing and water."
    },
    {
        id: 5,
        name: 'Home Cleaning',
        image: 'https://banner2.cleanpng.com/20180613/uqi/kisspng-dry-cleaning-laundry-clothing-service-5b21b1b75ecc46.0568764315289348393883.jpg',
        description: "Dry cleaning is a specialized textile cleaning method that uses a solvent, typically not water, to remove stains, dirt, and odors from fabrics. This process is ideal for delicate or non-water-resistant materials, such as silk or wool, leaving garments looking fresh and well-maintained without the use of traditional washing and water."
    },
    {
        id: 6,
        name: 'Products Store',
        image: 'https://banner2.cleanpng.com/20180613/uqi/kisspng-dry-cleaning-laundry-clothing-service-5b21b1b75ecc46.0568764315289348393883.jpg',
        description: "Dry cleaning is a specialized textile cleaning method that uses a solvent, typically not water, to remove stains, dirt, and odors from fabrics. This process is ideal for delicate or non-water-resistant materials, such as silk or wool, leaving garments looking fresh and well-maintained without the use of traditional washing and water."
    }
]

const container = document.querySelector("#container")

function showProduct() {
    const url = new URLSearchParams(window.location.search)
    const id = url.get('id')
    const filteredProduct = products.filter((product) => {
        return product.id == id
    })
    if (filteredProduct.length > 0) {
        const product = filteredProduct[0]
        const html = `
    <div class="image">
            <img src="${product.image}" alt="image">
    </div>
    <h2 class="name">${product.name}</h2>
    <p class="des">${product.description}</p>
    `
        container.innerHTML = html
    } else {
        const html = `
    <h2>Product not found</h2>
    `
        container.innerHTML = html;
    }
}
showProduct()
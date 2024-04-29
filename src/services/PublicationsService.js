import publications from '../assets/publications.json';

async function getPublications() {
    return new Promise((resolve, reject) => {
        if (publications.publications.length > 0) {
            resolve(publications.publications);
        } else {
            reject([]);
        }
    });
}

export default getPublications;

import { recipes } from './recipes.ts';

export async function main () {
    const container = globalThis.document.createElement('div');
    container.style.width = '80%';
    container.style.maxWidth = '900px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.position = 'relative';
    container.style.padding = '0.5em';
    container.style.background = '#334';
    for (let i = 0; i < recipes.length; ++i) {
        container.append(recipes[i].toHtml());
        if (i < recipes.length - 1) {
            container.append(globalThis.document.createElement('hr'));
        }
    }
    globalThis.document.body.append(container);
}

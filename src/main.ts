
import { recipes } from './recipes.ts';

export async function main () {
    const container = globalThis.document.createElement('div');
    container.style.width = '95%';
    container.style.maxWidth = '900px';
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.position = 'relative';
    container.style.padding = '0.5em';
    container.style.background = 'rgba(245, 236, 215, 0.8)';
    container.style.boxShadow = '0 0 20px #8444';
    container.style.marginTop = container.style.marginBottom = '1em';
    
    const bannerImg = new Image;
    bannerImg.src = '/assets/banner.png';
    bannerImg.style.width = '100%';
    container.append(bannerImg);
    
    for (let i = 0; i < recipes.length; ++i) {
        container.append(recipes[i].toHtml());
        if (i < recipes.length - 1) {
            container.append(globalThis.document.createElement('hr'));
        }
    }
    globalThis.document.body.append(container);
}

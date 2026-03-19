// js/pages/adicionar.js
// Refatorado 

import { descricoesPorCategoria, iconesPorItem, DDD_LIST } from "../data/data.js";

/*** Retorna elemento por ID ou o próprio elemento*/
export function getId(ref) {
    if (ref instanceof HTMLElement) return ref;

    const el = document.getElementById(ref);

    if (!el) {
        console.warn(`Elemento com id "${ref}" não encontrado`);
        return null;
    }

    return el;
}

/*** Retorna elemento via querySelector ou o próprio elemento*/
export function getElement(ref) {
    if (ref instanceof HTMLElement) return ref;

    const el = document.querySelector(ref);

    if (!el) {
        console.warn(`Elemento "${ref}" não encontrado`);
        return null;
    }

    return el;
}

/*** Retorna múltiplos elementos (array)*/
export function getElements(selector) {
    return Array.from(document.querySelectorAll(selector));
}

/*** Versão STRICT (erro ao invés de warn)*/
export function getStrict(ref) {
    if (ref instanceof HTMLElement) return ref;

    const el = document.querySelector(ref);

    if (!el) {
        throw new Error(`Elemento "${ref}" não encontrado`);
    }

    return el;
}



export function createEl(tag, options = {}) {

    const el = document.createElement(tag);

    Object.entries(options).forEach(([key, value]) => {

        if (key === "class") {
            if (Array.isArray(value)) {
                el.classList.add(...value);
            } else {
                el.classList.add(...value.split(" "));
            }
        }

        else if (key === "text") {
            el.textContent = value;
        }

        else if (key === "html") {
            el.innerHTML = value;
        }

        else if (key === "style" && typeof value === "object") {
            Object.assign(el.style, value);
        }

        else if (key === "data" && typeof value === "object") {
            Object.entries(value).forEach(([k, v]) => {
                el.dataset[k] = v;
            });
        }

        else if (key === "attrs" && typeof value === "object") {
            Object.entries(value).forEach(([k, v]) => {
                el.setAttribute(k, v);
            });
        }

        else if (key.startsWith("on") && typeof value === "function") {
            const event = key.substring(2).toLowerCase();
            el.addEventListener(event, value);
        }

        else if (key === "children") {
            const children = Array.isArray(value) ? value : [value];

            children.forEach(child => {
                if (child instanceof HTMLElement) {
                    el.appendChild(child);
                } else {
                    el.appendChild(document.createTextNode(child));
                }
            });
        }

        else if (key === "options" && tag.toLowerCase() === "select") {
            const fragment = document.createDocumentFragment();

            value.forEach(opt => {
                const option = document.createElement("option");

                if (typeof opt === "string") {
                    option.value = opt;
                    option.textContent = opt;
                } else {
                    option.value = opt.value;
                    option.textContent = opt.text;
                }

                fragment.appendChild(option);
            });

            el.appendChild(fragment);
        }

        else if (key in el) {
            el[key] = value;
        }

        else {
            el.setAttribute(key, value);
        }

    });

    if (["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName)) {
        el.addEventListener("input", () => {
            el.classList.remove("input-error");
        });
    }

    return el;
}

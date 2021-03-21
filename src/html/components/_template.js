import { html } from "https://unpkg.com/htm/preact/index.mjs?module"

const _TemplateClasses = "bg-gray-50"

/**
 * This is a template for what one of you own components could look like.
 * 
 * It's very minimal: it only changes the background of  the content you pass it.
 */
const _Template = ({ children }) => {
  return (
    html`
      <div class=${_TemplateClasses}>
        ${children}
      </div>
    `
  )
}

export default _Template

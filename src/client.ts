/**
 * Use this file to expose your package to the browser-client javascript
 * by appending whatever you want to share on the window object.
 *
 * Best to append it to a named object in the window object to avoid
 * global space conflict with other packages.
 *
 * Example:
 *
 * window.BFS = {
 *     addTwo
 * }
 */

import { addTwo } from './add-two'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (window) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.BFS = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...window.BFS,
        addTwo,
    }
}

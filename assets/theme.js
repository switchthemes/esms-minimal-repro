import 'statically-imported-module'

/**
 * The following lines replicate an implementation detail for a more exact
 * reproduction, but can be replaced with `import('dynamically-imported-module')`
 * with no change in functionality as far as this example goes.
 *
 */

if (
  !(HTMLScriptElement.supports && HTMLScriptElement.supports('importmap')) ||
  typeof window.importShim !== 'undefined'
) {
  window.importOrImportShim = (name) => importShim(name);
} else {
  window.importOrImportShim = (name) => import(name);
}

importOrImportShim('dynamically-imported-module');



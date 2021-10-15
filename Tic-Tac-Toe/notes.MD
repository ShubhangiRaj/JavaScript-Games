querySelectorAll() vs getElementsByClassName
querySelectorAll() & getElementsByClassName() are both common JavaScript methods that retrieve elements that match the given selectors. They are both incredibly useful for manipulating elements on the page, but confusion can arise when they are used alongside each other in code, oftentimes with no noticeable difference in the result.
What makes these methods so different?
querySelectorAll() retrieves a list of elements from the document based on your given selector, and returns a static NodeList object.

getElementsByClassName() retrieves a list of elements from the document based on an element’s class name, and returns a live HTML collection of elements.

Because querySelectorAll() returns a list that is static from the moment it is called, its list of items cannot be updated thereafter even if changes are made to the DOM dynamically. Contrast this to getElementsByClassName(), which returns matching sets of elements at any given moment it is called. If you are making changes to the DOM on the fly, the list returned by getElementsByClassName() will be updated dynamically.

Source:- https://unicorntears.dev/posts/queryselectorall-vs-getelementsbyclassname/
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

### 1. `<audio>` -- Audio embedding

* *type:* block-level
* *content:* flow content, embedded content, phrasing content[1]
* *support:* all browsers
* *example:*
```
<audio src=""></audio>
```
-Audio playing-

### 2. `<div>` -- Generic container

* *type:* block-level
* *content:* flow content, palpable content
* *support:* all browsers
* *example:*
```
<div><p>Contains something</p></div>
```
<div><p>Contains something</p></div>

### 3. `<header>` -- Contains navigation, logos and heading elements

* *type:* block-level
* *content:* flow content, palpable content
* *support:* all browsers
* *example:*
```
<header>Logo and nav links</header>
```
<header>Logo and nav links</header>

### 4. `<address>` -- supply contact info

* *type:* block-level
* *content:* flow content, palpable content
* *support:* all browsers
* *example:*
```
<address>123 main st, orlando FL 32817</address>
```
<address>123 main st, orlando FL 32817</address>

### 5. `<footer>` -- contains info about author of page, copywright info, and extra links

* *type:* block-level
* *content:* flow content, palpable content
* *support:* all browsers
* *example:*
```
<footer>Evan Klemen 2014</footer>
```
<footer>Evan Klemen 2014</footer>

### 6. `<ol>` -- ordered list

* *type:* block-level
* *content:* flow content, palpable content
* *support:* all browsers (basic support)
* *example:*
```
<ol>
  <li>Item one</li>
  <li>Item two</li>
</ol>
```
<ol>
  <li>Item one</li>
  <li>Item two</li>
</ol>

### 7. `<ul>` -- unordered list

* *type:* block-level
* *content:* flow content
* *support:* all browsers, no HTML5
* *example:*
```
<ul>
  <li>An item</li>
  <li>A different item</li>
</ul>
```
<ul>
  <li>An item</li>
  <li>A different item</li>
</ul>

### 8. `<table>` -- data represented in two or more dimentions

* *type:* block-level
* *content:* flow content
* *support:* all browsers
* *example:*
```
<table>
  <tr>
    <td>cats</td>
    <td>dogs</td>
  </tr>
  <tr>
    <td>mice</td>
    <td>fish</td>
  </tr>
</table>
```
<table>
  <tr>
    <td>cats</td>
    <td>dogs</td>
  </tr>
  <tr>
    <td>5</td>
    <td>2</td>
  </tr>
</table>

### 9. `<hr>` -- horizontal rule, break between paragraphs

* *type:* block-level
* *content:* flow content
* *support:* all browsers
* *example:*
```
<hr>
```
<hr>

### 10. `<section>` -- generic section of a document

* *type:* block-level
* *content:* flow content, sectioning content, palpable content
* *support:* all browsers
* *example:*
```
<section>
<p>One section</p>
</section>
<section>
<p>another section</p>
</section>

```
<section>
<h5>One section</h5>
</section>
<section>
<p>another section</p>
</section> 

### 11. `<b>` -- represents text which is stylistically differently 

* *type:* in-line
* *content:* Flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*
```
<p>This represents <b>different </b> texts. </p>
```
<p>This represents <b>different </b> texts. </p>

### 12. `<cite>` -- references another piece of work

* *type:* in-line
* *content:* Flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*
```
For more info <cite>[ISO]</cite>.
```
For more info <cite>[ISO]</cite>.

### 13. `<code>` -- shows a piece of code

* *type:* in-line
* *content:* Flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*
```
<p>Regular text <code>code stuffs</code> more text</p>
```
<p>Regular text <code>code stuffs</code> more text</p>

### 14. `<em>` -- shows emphasis

* *type:* in-line
* *content:* Flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*
```
<p>Regular text <em>EMPHASIZE</em> more text</p>
```
<p>Regular text <em>EMPHASIZE</em> more text</p>

### 15. `<kbd>` -- keyboard input

* *type:* in-line
* *content:* Flow content, phrasing content, palpable content
* *support:* all browsers
* *example:*
```
<p>Please press <kbd>CTRL</kbd> to continue</p>
```
<p>Please press <kbd>CTRL</kbd> to continue</p>

### 16. `<strong>` -- importance to text, usually bold

* *type:* in-line
* *content:* Flow content, phrasing content
* *support:* all browsers
* *example:*
```
<p>Add some <strong>STRONG</strong> text.</p>
```
<p>Add some <strong>STRONG</strong> text.</p>

### 17. `<var>` -- mathematical variable

* *type:* in-line
* *content:*phrasing content
* *support:* all browsers
* *example:*
```
<p>Please find <var>x</var> when 1 + <var>x</var> = 2</p>
```
<p>Please find <var>x</var> when 1 + <var>x</var> = 2</p>

### 18. `<img>` -- image element

* *type:* in-line
* *content:* Flow content, phrasing content, embedded content
* *support:* all browsers
* *example:*
```
<p>Add and image with <img src="http://google.com" /></p>
```
<p>Add and image with <img src="http://google.com" /></p>

### 19. `<span>` -- generic inline container

* *type:* in-line
* *content:* Flow content, phrasing content
* *support:* all browsers
* *example:*
```
<p>Add a <span>span</span> of text.</p>
```
<p>Add a <span>span</span> of text.</p>

### 20. `<br>` -- line break

* *type:* in-line
* *content:* Flow content, phrasing content
* *support:* all browsers
* *example:*
```
Evan<br>
Orlando<br>
FL<br>
```
Evan<br>
Orlando<br>
FL<br>
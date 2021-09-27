import React from "react";

const StringsPage = () => {
    return (
        <div>
            <div className="content-subtopic">Multiline Strings</div>
            Python allows us to declare multiline strings using """ or '''. Multiline strings keep line breaks as they were present while
            declaring the string.
            <div className="code-container">
                a = 
                <span className="string"> """This is the first line.<br/>
                Notice how line breaks are preserved during printing."""</span><br/>
                <span className="function-call">print</span>(a)<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                    Output:<br/>
                    This is the first line.<br/>
                    Notice how line breaks are preserved during printing.
                </span><br/>
                <span className="string">"""</span>
            </div>
            After the first set of quotes, all whitespaces are preserved as they are present in the code. This means that if you create a 
            multiline string inside a function, if statement, or anything that requires indentation from Python interpreter, the tab spaces 
            will also be present in the string. For example:
            <div className="code-container">
                <span className="keyword-italics">def</span> foo():<br/>
                &emsp;a = <span className="string">'''First line<br/>
                &emsp;&emsp;extra indented line<br/>
                &emsp;function level indentation<br/>
                no indentation<br/>
                &emsp;'''
                </span><br/><br/>
                &emsp;<span className="function-call">print</span>(a)<br/><br/>
                <span className="function-call">foo</span>()<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                    Output:<br/>
                    First line<br/>
                    &emsp;&emsp;extra indented line<br/>
                    &emsp;function level indentation<br/>
                    no indentation<br/>
                </span><br/>
                <span className="string">"""</span>
            </div>
            If you want to define a string that spans multiple lines but does not retain whitespaces or line breaks, you can place 
            the string inside parenthesis. For example:
            <div className="code-container">
                long_str = (<br/>
                &emsp;<span className="string">"First string."<br/>
                &emsp;"Second string."<br/>
                &emsp;&emsp;"\nNotice how tab does not affect the string"<br/>
                </span>
                )<br/><br/>
                <span className="function-call">print</span>(long_str)<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                    Output:<br/>
                    First string.Second string.<br/>
                    Notice how tab does not affect the string
                </span><br/>
                <span className="string">"""</span>
            </div>
            <div className="content-subtopic">String Slicing</div>
            String slicing follows the format of <code>string[start:end:jump]</code>.
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                s = <span className="string">"0123456789"</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span>s[:]<br/>
                '0123456789'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>s[::<span className="number">3</span>]<br/>
                '0369'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>s[::<span className="number">-2</span>]<br/>
                '97531'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>s[<span className="number">-5</span>:<span className="number">-2</span>]<br/>
                '567'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>s[<span className="number">2</span>:<span className="number">8</span>]<br/>
                '234567'
            </div>
            <div className="content-subtopic">Formatting Strings</div>
            Python provides multiple ways to format strings, such as using the <code>%</code> operator for C-style string formatting, the 
            <code> format()</code> function, and formatted string literals (strings that start with <code>f</code> or <code>F</code>)
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                var1, var2, var3, var4 = 
                <span className="number"> 10</span>,
                <span className="string"> '$'</span>,
                <span className="number"> 901.921049</span>,
                <span className="string"> ' exit'</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="string">'int: %d, float: %f, char: %c, and string: %s' </span>% (var1, var3, var2, var4)<br/>
                'int: 10, float: 901.921049, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="string">'int: %d, float: %.2f, char: %c, and string: %s' </span>% (var1, var3, var2, var4)<br/>
                'int: 10, float: 901.92, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="string">'int: &#123;&#125;, float: &#123;&#125;, char: &#123;&#125;, and string: &#123;&#125;'</span>
                .<span className="function-call">format</span>(var1, var3, var2, var4)<br/>
                'int: 10, float: 901.921049, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="string">'int: &#123;&#125;, float: &#123;:.2f&#125;, char: &#123;&#125;, and string: &#123;&#125;'</span>
                .<span className="function-call">format</span>(var1, var3, var2, var4)<br/>
                'int: 10, float: 901.92, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="string">'int: &#123;0&#125;, float: &#123;2&#125;, char: &#123;1&#125;, and string: &#123;3&#125;'</span>
                .<span className="function-call">format</span>(var1, var2, var3, var4)<br/>
                'int: 10, float: 901.921049, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="string">'int: &#123;a&#125;, float: &#123;b&#125;, char: &#123;c&#125;, and string: &#123;d&#125;'</span>
                .<span className="function-call">format</span>(a=var1, c=var3, b=var2, d=var4)<br/>
                'int: 10, float: 901.921049, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="format-keyword">f</span>
                <span className="string">'int: </span>&#123; var1 &#125;<span className="string">, float: </span>&#123; var3 &#125;<span className="string">,
                 char: </span>&#123; var2 &#125;<span className="string">, and string: </span>&#123; var4 &#125;<span className="string">'</span><br/>
                'int: 10, float: 901.921049, char: $, and string:  exit'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="format-keyword">F</span>
                <span className="string">'int: </span>&#123; var1 + <span className="number">10</span> &#125;<span className="string">, float: </span>
                &#123; var3:<span className="format-keyword">.2f</span> &#125;<span className="string">, char: </span>&#123; var2 &#125;<span className="string">, 
                and string: </span>&#123; var4.<span className="function-call">upper</span>() &#125;<span className="string">'</span><br/>
                'int: 20, float: 901.92, char: $, and string:  EXIT'
            </div>
        </div>
    );
};

export default StringsPage;
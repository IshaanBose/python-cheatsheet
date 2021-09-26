import React from "react";
import PageContentHeader from "../PageContentHeader";
import '../Page.css';

const BasicsPage = (props) => {
    return (
        <div>
            <PageContentHeader hidePage={ props.hidePage }>Python Basics</PageContentHeader>
            <br/>
            <div className="content-subtopic">About Python</div>
            <ul>
                <li>Desgined by Guido van Rossum</li>
                <li>Python is an interpreted, interactive, object-oriented programming language</li>
                <li>Python can be treated in a procedural way, an object-oriented way or a functional way</li>
            </ul>
            <div className="content-subtopic">Comments</div>
            <div className="code-container">
                <div className="string">
                    <span className="comment"># This is a single-line comment</span><br/><br/>
                    '''<br/>
                    <span className="comment">This is a multi-line comment</span><br/>
                    '''<br/><br/>
                    """<br/>
                    <span className="comment">This is also an example of multi-line comment</span><br/>
                    """
                </div>
            </div>
            <div className="content-subtopic">Variables</div>
            Unlike most languages, Python does not explicitly define a variable's data type.
            <div className="code-container">
                <span className="comment"># These are all valid variables</span><br/>
                x = <span className="number">10</span> <span className="comment"># this is a variable of type int</span><br/>
                y = <span className="string">"Hello world"</span> <span className="comment"># this is a variable of type string</span>
            </div>
            Python supports multiple variable assignment
            <div className="code-container">
                var1, var2, var3 = <span className="number">10</span>, <span className="string">'var2'</span>, <span className="number">1.28</span>
                <span className="comment"> # equivalent to: var1 = 10 var2 = 'var2' var3 = 1.28</span><br/>
                item1, item2 = [<span className="string">'A'</span>, <span className="string">'B'</span>]
                <span className="comment"> # equivalent to: item1 = 'A' item2 = 'B'</span><br/>
                a = b = c = <span className="number">100</span>
                <span className="comment"> # assigns 100 to all the variables</span>
            </div>
            Python also allows for more advanced unpacking of lists and tuples.
            <div className="code-container">
                a, *b = [<span className="number">1</span>, <span className="number">2</span>, <span className="number">3</span>, <span className="number">4</span>]
                <span className="comment"> # this gives us a = 1 and b = [2, 3, 4]</span><br/>
                a, *b = (<span className="number">1</span>, <span className="number">2</span>, <span className="number">3</span>, <span className="number">4</span>)
                <span className="comment"> # same as above</span><br/>
                a, *b, c = (<span className="number">1</span>, <span className="number">2</span>, <span className="number">3</span>, <span className="number">4</span>)
                <span className="comment"> # this gives us a = 1, b = [2, 3] and c = 4</span>
            </div>
            You can also unpack dictionaries, however this will only allow us to access its keys but not its values.
            <div className="code-container">
                a, b = &#123; <span className="string">'key1'</span>: <span className="number">10</span>, <span className="string">'key2'</span>: <span className="number">20.12</span> &#125;
                <span className="comment"> # this gives us a = 'key1' and b = 'key2', we cannot unpack the values</span>
            </div>
            <div className="content-subtopic">Variable Scope</div>
            The scope of a variable in Python extends from the first assignment of the variable until the end of its block.
            A block in Python is defined by functions and classes rather than indentation. So a variable assigned in the an if statement or loop statements,
            it can still be accessed after the end of the statements. For example:
            <div className="code-container">
                <span className="keyword">if</span> <span className="literal">True</span>:<br/>
                &emsp;i = <span className="number">10</span><br/>
                <span className="function-call">print</span>(i)
                <span className="comment"> # this will print 10, despite i never being assigned a value before the if the statement</span>
            </div>
        </div>
    );
};

export default BasicsPage;
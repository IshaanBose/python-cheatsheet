import React, { useState } from "react";
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
            can still be accessed after the end of the statements. For example:
            <div className="code-container">
                <span className="keyword">if</span> <span className="literal">True</span>:<br/>
                &emsp;i = <span className="number">10</span><br/>
                <span className="function-call">print</span>(i)
                <span className="comment"> # this will print 10, despite i never being assigned a value before the if the statement</span><br/><br/>
                <span className="keyword">for</span> j <span className="keyword">in</span> <span className="function-call">range</span>(<span className="number">3</span>):<br/>
                &emsp;<span className="keyword">continue</span><br/>
                <span className="function-call">print</span>(j) <span className="comment"># this will print 2</span>
            </div>
            A variable defined inside a function cannot be accessed outside of it.
            <div className="code-container">
                <span className="keyword-italics">def</span> foo():<br/>
                &emsp;local = <span className="number">10</span><br/>
                <span className="function-call">print</span>(local)
                <span className="comment"> # this gives us a NameError as local is not defined outside of function foo()</span>
            </div>
            A variable defined outside of a function can be accessed inside it. However, assigning a value to the variable will convert it to a local variable, 
            meaning the value will only be changed for that variable inside of the function and not outside of it. This also means that if you accessed the local 
            variable's value before the assignment, Python will throw an UnboundLocalError.
            <div className="code-container">
                <span className="keyword-italics">def</span> foo1():<br/>
                &emsp;<span className="function-call">print</span>(i)<br/><br/>
                <span className="keyword-italics">def</span> foo2():<br/>
                &emsp;i = <span className="number">0</span><br/>
                &emsp;<span className="function-call">print</span>(i)<br/><br/>
                <span className="keyword-italics">def</span> foo3():<br/>
                &emsp;<span className="function-call">print</span>(i)<br/>
                &emsp;i = <span className="number">1</span><br/>
                &emsp;<span className="function-call">print</span>(i)<br/><br/>
                i = <span className="number">10</span><br/>
                <span className="function-call">foo1</span>()
                <span className="comment"> # this will print 10 (value of global variable i)</span><br/>
                <span className="function-call">foo2</span>()
                <span className="comment"> # this will print 0 (value of local variable i)</span><br/>
                <span className="function-call">print</span>(i)
                <span className="comment"> # this will print 10, showing that foo2 did not change the value of the global variable</span><br/>
                <span className="function-call">foo3</span>()
                <span className="comment"> # this will give us an UnboundLocalError</span><br/>
            </div>
            You can access variables that are not in the scope of a function using <code>global</code> or <code>nonlocal</code> keywords.
            <code> global</code> allows us to access variables defined in the global scope (outside any functions or classes), whereas <code>nonlocal </code>
            allows us to access variables defined in the outer scope with relation to the current scope.
            <div className="code-container">
                <span className="keyword-italics">def</span> outer():<br/>
                &emsp;<span className="keyword">global </span>global_var<br/><br/>
                &emsp;<span className="function-call">print</span>(<span className="string">'global_var before change inside outer():'</span>, global_var)<br/>
                &emsp;global_var = <span className="number">1</span><br/>
                &emsp;outer_var = <span className="number">2</span><br/>
                &emsp;outer_var2 = <span className="string">'a'</span><br/><br/>
                &emsp;<span className="keyword-italics">def</span> inner():<br/>
                &emsp;&emsp;<span className="keyword">global </span>global_var<br/>
                &emsp;&emsp;<span className="keyword">nonlocal </span>outer_var<br/><br/>
                &emsp;&emsp;<span className="function-call">print</span>(<span className="string">"global_var inside inner():"</span>, global_var)<br/>
                &emsp;&emsp;<span className="function-call">print</span>(<span className="string">"outer_var before change inside inner():"</span>, outer_var)<br/>
                &emsp;&emsp;outer_var = <span className="number">9</span><br/>
                &emsp;&emsp;outer_var2 = <span className="string">'b'</span><br/>
                &emsp;&emsp;<span className="function-call">print</span>(<span className="string">"outer_var2 in inner()"</span>, outer_var2)<br/><br/>
                &emsp;<span className="function-call">inner</span>()<br/>
                &emsp;<span className="function-call">print</span>(<span className="string">"outer_var after change:"</span>, outer_var)<br/>
                &emsp;<span className="function-call">print</span>(<span className="string">"outer_var2 after inner():"</span>, outer_var2)<br/><br/>
                global_var = <span className="number">10</span><br/>
                <span className="function-call">outer</span>()<br/>
                <span className="function-call">print</span>(<span className="string">'global_var after outer():'</span>, global_var)<br/><br/>
                <span className="string">'''</span><br/>
                <span className="comment">
                    This gives us the following output:<br/>
                    global_var before change inside outer(): 10<br/>
                    global_var inside inner(): 1<br/>
                    outer_var before change inside inner(): 2<br/>
                    outer_var2 in inner() b<br/>
                    outer_var after change: 9<br/>
                    outer_var2 after inner(): a<br/>
                    global_var after outer(): 1
                </span><br/>
                <span className="string">'''</span><br/>
            </div>
            <div className="content-subtopic">Ternary Operator</div>
            Python supports ternary operators with this format: <code>&lt;expression&gt; if &lt;condition&gt; else &lt;expression&gt;</code>.
            For example:
            <div className="code-container">
                a, b = <span className="number">10</span>, <span className="number">9</span><br/>
                max_val = a<span className="keyword"> if </span>a &gt; b<span className="keyword"> else </span> b
                <span className="comment"> # assigns value of a to max_val</span><br/><br/>
                <span className="comment"># You can also call functions from ternanry operators</span><br/>
                <span className="function-call">foo</span>()<span className="keyword"> if </span>a &gt; b<span className="keyword"> else </span> <span className="function-call">foo1</span>()
                <span className="comment"> # This calls foo() if a &gt; b, otherwise it calls foo1()</span>
            </div>
        </div>
    );
};

export default BasicsPage;
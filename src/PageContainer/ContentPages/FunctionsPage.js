import React from "react";

const FunctionsPage = () => {
    return (
        <div>
            <div className="content-subtopic">Parameters & Arguments</div>
            Positional parameters must be placed before keyword parameters. Similarly, when passing arguments, positional 
            arguments must be passed before keyword arguments.
            <div className="code-container">
                <span className="comment"># this will give us a SyntaxError</span><br/>
                <span className="keyword-italics">def</span> foo(
                    <span className="arg-param">a</span>=<span className="number">10</span>,
                    <span className="arg-param"> b</span>
                ):<br/>
                &emsp;<span className="keyword">pass</span><br/><br/>
                <span className="keyword-italics">def</span> foo1(
                    <span className="arg-param">a</span>,
                    <span className="arg-param"> b</span>
                ):<br/>
                &emsp;<span className="keyword">pass</span><br/><br/>
                <span className="function-call">foo1</span>(
                    <span className="arg-param">b</span>=<span className="number">1</span>,
                    <span className="number"> 10</span>
                )
                <span className="comment"> # assuming foo() does not exist, this will give us a SyntaxError</span>
            </div>
            Python also supports variable number arguments, both of type positional and keyword.
            <div className="code-container">
                <span className="keyword-italics">def</span> foo(
                    <span className="arg-param">*args</span>
                ):<br/>
                &emsp;<span className="function-call">print</span>(args)<br/><br/>
                <span className="keyword-italics">def</span> foo1(
                    <span className="arg-param">**kwargs</span>
                ):<br/>
                &emsp;<span className="function-call">print</span>(kwargs)<br/><br/>
                <span className="function-call">foo</span>(
                    <span className="number">12</span>, <span className="string">'a'</span>, <span className="number">90.123</span>
                )<br/>
                <span className="function-call">foo1</span>(
                    <span className="arg-param">a</span>=<span className="number">12</span>,
                    <span className="arg-param"> b</span>=<span className="string">'a'</span>,
                    <span className="arg-param"> c</span>=<span className="number">90.123</span>
                )<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                    Output:<br/>
                    (12, 'a', 90.123)<br/>
                    &#123;'a': 12, 'b': 'a', 'c': 90.123&#125;
                </span><br/>
                <span className="string">"""</span>
            </div>
            Instead of passing individual values to functions, we can also unpack iterable objects to pass parameters.
            <div className="code-container">
                <span className="keyword-italics">def</span> foo(
                    <span className="arg-param">a</span>,<span className="arg-param"> b</span>,<span className="arg-param"> c</span>
                ):<br/>
                &emsp;<span className="function-call">print</span>(a, b, c)<br/><br/>
                <span className="function-call">foo</span>(*[<span className="number">12</span>,<span className="number"> 3</span>,<span className="number"> 9</span>])<br/>
                <span className="function-call">foo</span>(*(<span className="number">12</span>,<span className="string"> 'a'</span>,<span className="number"> 2</span>))<br/>
                <span className="function-call">foo</span>(**&#123;
                    <span className="string">'a'</span>: <span className="number">1</span>,
                    <span className="string"> 'c'</span>: <span className="number">2</span>,
                    <span className="string"> 'b'</span>: <span className="number">3</span>
                    &#125;)<br/><br/>
                    <span className="string">"""</span><br/>
                    <span className="comment">
                        Output:<br/>
                        12 3 9<br/>
                        12 a 2<br/>
                        1 3 2
                    </span><br/>
                    <span className="string">"""</span>
            </div>
            <div className="content-subtopic">Type Hinting</div>
            Python is a dynamically typed language, meaning that variables are not restricted to any one specific data type. This means
            that users are free to pass whatever data they wish to functions, even if the function was not created to handle that data type.
            To indicate what data was expected to be passed, functions would require proper documentation to show what was expected. However, 
            with the introduction of <a href="https://www.python.org/dev/peps/pep-0484/">PEP 484</a>, we can easily use type hinting &mdash;
            a more succinct way of indicating the datatypes of functions parameters.
            <div className="code-container">
                <span className="keyword">from</span> typing <span className="keyword">import</span> TypeVar<br/><br/>
                T = <span className="function-call">TypeVar</span>(<span className="string">'T'</span>,
                <span className="typecast"> int</span>, <span className="typecast"> float</span>)<br/><br/>
                <span className="keyword-italics">def</span> add(
                    <span className="arg-param">a</span>: T,<span className="arg-param"> b</span>: T):<br/>
                &emsp;<span className="function-call">print</span>(a + b)<br/><br/>
                <span className="keyword-italics">def</span> print_list(
                    <span className="arg-param">l</span>: <span className="typecast">list</span>):<br/>
                &emsp;<span className="keyword">for</span> i <span className="keyword">in</span> l:<br/>
                &emsp;&emsp;<span className="function-call">print</span>(i, <span className="arg-param">end</span>=<span className="string">' '</span>)<br/>
                &emsp;<span className="function-call">print</span>()<br/><br/>
                <span className="keyword-italics">def</span> foo(<span className="arg-param">a</span>:<span className="typecast"> int</span>)
                -&gt; <span className="typecast">str</span>:<br/>
                &emsp;<span className="keyword">return</span><span className="function-call"> chr</span>(a)
            </div>
            The above code snippet shows different ways in which we can utilise type hinting. The functions <code>print_list()</code> and
            <code> foo()</code> show how to do type hinting without using any modules. We define the parameters <code>l</code> and <code>a</code> as
            datatype of <code> list</code> and <code>int</code>, respectively. Furthermore, the function <code>foo()</code> defines the datatype
            of the return value as <code>str</code>.<br/>
            Function <code>add</code> shows how we can utilise the typing module to define more complex type hintings. <code>T</code> defines
            a type hinting that would indicate that the parameter should only be of type <code>int</code> or <code>float</code>.<br/>
            While type hinting does not force users to pass arguments of the defined type, it makes it easier for people reading or using these functions
            to understand what exactly the functions requires from the user and what it returns. To better utilise the functionalities of
            type hinting, it is recommended to use static typing linters such as <a href="https://github.com/python/mypy">mypy</a>.
        </div>
    );
};

export default FunctionsPage;
import React from "react";

const ClassesPage = () => {
    return(
        <div>
            <div className="content-subtopic">Multiple Inheritance</div>
            Not only does Python support multi-level Inheritance, it also supports multiple inheritance. The problem with multiple inheritance
            however is method overriding. If two inherited classes contain a common method <code>foo()</code>, which one will be inherited?
            <div className="code-container">
                <span className="keyword-italics">class</span><span className="typecast"> Base1</span>:<br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="class-key">self</span>.__val = <span className="number">10</span><br/><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> override</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="function-call">print</span>(<span className="string">"In Base1"</span>,
                <span className="class-key"> self</span>.__val)<br/><br/>
                <span className="keyword-italics">class</span><span className="typecast"> Base2</span>:<br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="class-key">self</span>.__val = <span className="number">-10</span><br/><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> override</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="function-call">print</span>(<span className="string">"In Base2"</span>,
                <span className="class-key"> self</span>.__val)<br/><br/>
                <span className="keyword-italics">class</span><span className="typecast"> Child1</span>(
                    <span className="class-key">Base1</span>,<span className="class-key"> Base2</span>
                ):<br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;Base1.<span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;Base2.<span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="class-key">self</span>.val = <span className="number">1</span><br/><br/>
                <span className="keyword-italics">class</span><span className="typecast"> Child2</span>(
                    <span className="class-key">Base2</span>,<span className="class-key"> Base1</span>
                ):<br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;Base1.<span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;Base2.<span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="class-key">self</span>.val = <span className="number">2</span><br/><br/>
                child1, child2 = <span className="function-call">Child1</span>(), <span className="function-call">Child2</span>()<br/><br/>
                <span className="function-call">print</span>(<span className="string">"Child1:"</span>)<br/>
                child1.<span className="function-call">override</span>()<br/>
                <span className="function-call">print</span>(child1.val, child1._Base1__val, child1._Base2__val)<br/>
                <span className="function-call">print</span>()<br/>
                <span className="function-call">print</span>(<span className="string">"Child2:"</span>)<br/>
                child2.<span className="function-call">override</span>()<br/>
                <span className="function-call">print</span>(child2.val, child2._Base1__val, child2._Base2__val)<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                    Output:<br/>
                    Child1:<br/>
                    In Base1: 10<br/>
                    1 10 -10<br/><br/>
                    Child2:<br/>
                    In Base2: -10<br/>
                    2 10 -10
                </span><br/>
                <span className="string">"""</span>
            </div>
            The above code shows how methods are resolved during multiple inheritance. The two base classes have a common method:
            <code> override()</code>, so when that method is called by the child classes Python chooses the method of the class that
            was inherited first.<br/>
            On top of that, the above code shows how name mangling works in Python. Name mangling is a way to avoid easily overriding parent
            class attributes/methods. By adding "__" in front of an attribute or method, it allows child classes to have attributes and methods
            of the same name without overriding it.
            <div className="content-subtopic">Abstract Classes</div>
            Any method defined in an abstract class must be overriden by the inheriting class.
            <div className="code-container">
                <span className="keyword">from</span> abc <span className="keyword">import</span> ABCMeta, abstractmethod<br/><br/>
                <span className="keyword-italics">class</span><span className="typecast"> Abstract</span>(
                    <span className="typecast">metaclass</span>=<span className="class-key">ABCMeta</span>
                ):<br/>
                &emsp;<span className="decorators">@abstractmethod</span><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> foo</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="keyword">pass</span><br/><br/>
                &emsp;<span className="decorators">@property</span><br/>
                &emsp;<span className="decorators">@abstractmethod</span><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> val</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="keyword">pass</span><br/><br/>
                <span className="keyword-italics">class</span><span className="typecast"> Base</span>(
                <span className="class-key">Abstract</span>):<br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> __init__</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="class-key">self</span>._val = <span className="number">10</span><br/><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> foo</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="function-call">print</span>(<span className="string">"Abstract method overriden"</span>)<br/><br/>
                &emsp;<span className="decorators">@property</span><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> val</span>(<span className="class-key">self</span>):<br/>
                &emsp;&emsp;<span className="keyword">return </span><span className="class-key">self</span>._val<br/><br/>
                &emsp;<span className="decorators">@val.setter</span><br/>
                &emsp;<span className="keyword-italics">def</span>
                <span className="function-call"> val</span>(<span className="class-key">self</span>, <span className="arg-param">value</span>):<br/>
                &emsp;&emsp;<span className="class-key">self</span>._val = value<br/><br/>
                b = <span className="function-call">Base</span>()<br/>
                b.<span className="function-call">foo</span>()<br/>
                <span className="function-call">print</span>(b.val)<br/>
                b.val = <span className="number">99</span><br/>
                <span className="function-call">print</span>(b.val)<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                    Output:<br/>
                    Asbtract method overriden<br/>
                    10<br/>
                    99
                </span><br/>
                <span className="string">"""</span>
            </div>
            This code also shows the use of <code>@property</code> and <code>@attribute.setter</code> annotations to create getter and setter
            methods for class attributes.
        </div>
    )
};

export default ClassesPage;
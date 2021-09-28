import React from "react";

const DictionariesPage = () => {
    return (
        <div>
            Dictionaries are ordered as of Python 3.7. In Python 3.6 and earlier, dictionaries are undordered.
            <div className="content-subtopic">Dictionary Comprehension</div>
            Dictionaries can also be created using dictionary comprehension, similar to list comprehension.
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                &#123; k: v <span className="keyword">for </span>(k, v)<span className="keyword"> in </span>
                <span className="function-call">zip</span>((<span className="string">'a'</span>,<span className="string"> 'b'</span>),
                (<span className="number">1</span>,<span className="number"> 2</span>)) &#125;<br/>
                &#123;'a': 1, 'b': 2&#125;<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l = [<span className="string">'a'</span>,<span className="string"> 'b'</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                &#123; i: l[i] <span className="keyword">for </span>i<span className="keyword"> in </span>
                <span className="function-call">range</span>(<span className="function-call">len</span>(l)) &#125;<br/>
                &#123;0: 'a', 1: 'b'&#125;<br/>
            </div>
            <div className="content-subtopic">Accessing Values</div>
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                d = &#123;<span className="number">0</span>:<span className="string"> 'a'</span>,
                <span className="number"> 1</span>:<span className="string"> 'b'</span>&#125;<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                d.<span className="function-call">keys</span>() 
                <span className="comment"> # this does not return a list, if you want a list you can typecast as such</span><br/>
                dict_keys([0, 1])<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="typecast">list</span>(d.<span className="function-call">keys</span>())<br/>
                [0, 1]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="typecast">tuple</span>(d.<span className="function-call">keys</span>())<br/>
                (0, 1)<br/>
                <span className="arrow">&gt;&gt;&gt; </span>d.<span className="function-call">values</span>()
                <span className="comment"> # similarly, you can typecast the result to list or tuple</span><br/>
                dict_values(['a', 'b'])
            </div>
        </div>
    );
};

export default DictionariesPage;
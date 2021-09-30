import React from "react";

const DictionariesPage = () => {
    return (
        <div>
            Dictionaries are ordered as of Python 3.7. In Python 3.6 and earlier, dictionaries are undordered.<br/>
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
                dict_values(['a', 'b'])<br/>
                <span className="arrow">&gt;&gt;&gt; </span>x = d.<span className="function-call">items</span>()<br/>
                <span className="arrow">&gt;&gt;&gt; </span>x<br/>
                dict_items([(0, 'a'), (1, 'b')])<br/>
                <span className="arrow">&gt;&gt;&gt; </span>d[<span className="number">2</span>] = <span className="string">'c'</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span>x
                <span className="comment"> # note how x updates automatically</span><br/>
                dict_items([(0, 'a'), (1, 'b'), (2, 'c')])<br/>
            </div>
            <div className="content-subtopic">Deleting Values</div>
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                d = &#123;<span className="number">0</span>:<span className="string"> 'a'</span>,
                <span className="number"> 1</span>:<span className="string"> 'b'</span>&#125;<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                d.<span className="function-call">pop</span>(<span className="number">1</span>)<br/>
                'b'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>d<br/>
                &#123;0: 'a'&#125;<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                d.<span className="function-call">pop</span>(<span className="number">1</span>, <span className="string">'no'</span>)<br/>
                'no'<br/>
                <span className="arrow">&gt;&gt;&gt; </span>d[<span className="number">2</span>] = <span className="string">'c'</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span>d.<span className="function-call">popitem</span>()
                <span className="comment"> # removes and returns the last item that was added</span><br/>
                (2, 'c')<br/>
                <span className="arrow">&gt;&gt;&gt; </span>d[<span className="number">3</span>] = <span className="string">'d'</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span><span className="keyword">del </span>d[<span className="number">3</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>d.<span className="function-call">clear</span>()
            </div>
            <div className="content-subtopic">Misc. Methods</div>
            <div className="code-container">
                d = <span className="literal">None</span><br/>
                keys = (<span className="number">1</span>, <span className="number">2</span>, <span className="number">3</span>)<br/>
                values = (<span className="string">'a'</span>, <span className="string">'b'</span>)<br/>
                d = <span className="typecast">dict</span>.<span className="function-call">fromkeys</span>(keys, values)<br/>
                <span className="function-call">print</span>(d)<br/><br/>
                <span className="function-call">print</span>(d.<span className="function-call">setdefault</span>(
                    <span className="number">1</span>, <span className="string">'a'</span>
                ))<br/>
                <span className="function-call">print</span>(d.<span className="function-call">setdefault</span>(
                    <span className="number">4</span>, <span className="string">'b'</span>
                ))<br/>
                <span className="function-call">print</span>(d)<br/><br/>
                <span className="string">"""</span><br/>
                <span className="comment">
                &#123;1: ('a', 'b'), 2: ('a', 'b'), 3: ('a', 'b')&#125;<br/>
                ('a', 'b')<br/>
                b<br/>
                &#123;1: ('a', 'b'), 2: ('a', 'b'), 3: ('a', 'b'), 4: 'b'&#125;<br/>
                </span>
                <span className="string">"""</span>
            </div>
        </div>
    );
};

export default DictionariesPage;
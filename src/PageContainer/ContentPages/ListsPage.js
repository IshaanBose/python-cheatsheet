import React from "react";

const ListsPage = () => {
    return (
        <div>
            List indexing works the same as string slicing.
            <div className="content-subtopic">Changing Items</div>
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                l = [<span className="number">0</span>,<span className="number"> 1</span>, <span className="number"> 2</span>,
                <span className="number"> 3</span>,<span className="number"> 4</span>,<span className="number"> 5</span>,
                <span className="number"> 6</span>,<span className="number"> 7</span>,<span className="number"> 8</span>,<span className="number"> 9</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l[<span className="number">2</span>:<span className="number">5</span>] = [
                    <span className="string">'2'</span>,<span className="string"> '3'</span>,<span className="string"> '4'</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0, 1, '2', '3', '4', 5, 6, 7, 8, 9]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l[<span className="number">6</span>:<span className="number">8</span>] = [
                    <span className="string">'6'</span>,<span className="string"> '7'</span>,<span className="number"> 7.5</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0, 1, '2', '3', '4', 5, '6', '7', 7.5, 8, 9]
            </div>
            <div className="content-subtopic">Adding Items</div>
            The <code>extend()</code> function allows us to add any iterable object to a list.
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                l = [<span className="number">0</span>,<span className="number"> 1</span>, <span className="number"> 2</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l.<span className="function-call">extend</span>([<span className="number">3</span>,<span className="number"> 4</span>])<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0, 1, 2, 3, 4]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l.<span className="function-call">extend</span>((<span className="number">5</span>,<span className="number"> 6</span>))<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0, 1, 2, 3, 4, 5, 6]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l.<span className="function-call">extend</span>(&#123;<span className="number">7</span>:<span className="string"> 'a'</span>,
                <span className="number"> 8</span>:<span className="string"> 'b'</span>&#125;)<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<span className="comment"> # note how only keys are added to the list</span><br/>
                [0, 1, 2, 3, 4, 5, 6, 7, 8]
            </div>
            <div className="content-subtopic">Removing Items</div>
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                l = [<span className="number">0</span>,<span className="number"> 3</span>,<span className="number"> 2</span>,<span className="number"> 3</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l.<span className="function-call">remove</span>(<span className="number">3</span>)<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0, 2, 3]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                l.<span className="function-call">pop</span>(<span className="number">1</span>)<br/>
                2<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0, 3]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="keyword">del </span>l[<span className="number">1</span>]<br/>
                <span className="arrow">&gt;&gt;&gt; </span>l<br/>
                [0]<br/>
            </div>
            <div className="content-subtopic">Custom Sorting</div>
            <div className="code-container">
            <span className="keyword-italics">def</span> custom_sort(<span className="arg-param">item</span>):<br/>
            &emsp;<span className="keyword">return </span>item % <span className="number">5</span><br/><br/>
            l = [<span className="number">78</span>,<span className="number"> 90</span>, <span className="number"> 1</span>,
                <span className="number"> -9</span>,<span className="number"> 57</span>,<span className="number"> 22</span>]<br/>
            l.<span className="function-call">sort</span>(<span className="arg-param">key</span>=custom_sort)<br/>
            <span className="function-call">print</span>(l)
            <span className="comment"> # prints: [90, 1, -9, 57, 22, 78]</span>
            </div>
        </div>
    );
};

export default ListsPage;
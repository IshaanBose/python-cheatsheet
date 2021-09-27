import React from "react";

const TuplesPage = () => {
    return (
        <div>
            Tuples are ordered and immutable. Due to their immutability, accessing elements in tuples is a lot quicker than accessing 
            element in a list. Tuples also require less space. Tuple indexing works the same as string slicing.<br/><br/>
            Tuples have only two methods: <code>count()</code> and <code>index()</code>. These work the same as their <code>list</code> counterparts.<br/>
            <div className="content-subtopic">Creating Tuples</div>
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                t = (<span className="number">1</span>, )
                <span className="comment"> # the comma defines t as a tuple</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                t = (<span className="number">1</span>)
                <span className="comment"> # here, t is of type int</span><br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                <span className="typecast">tuple</span>(i <span className="keyword">for </span>i <span className="keyword">in </span>
                <span className="function-call">range</span>(<span className="number">5</span>))
                <span className="comment"> # similar to list comprehension, tuple comprehension also exists.</span><br/>
                (0, 1, 2, 3, 4)<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                (i <span className="keyword">for </span>i <span className="keyword">in </span><span className="function-call">range</span>
                (<span className="number">5</span>))
                <span className="comment"> # note that if we do not typecast the comprehension, we do not get a tuple</span><br/>
                &lt;generator object &lt;genexpr&gt; at 0x0000019323DD9510&gt;
            </div>
            <div className="content-subtopic">Adding Elements</div>
            While we cannot change a tuple, and hence cannot add elements to a pre-existing tuple, we can add two or more tuples to create
            a new tuple. We can also multiply (<code>*</code>) tuples to create new tuples.
            <div className="code-container">
                <span className="arrow">&gt;&gt;&gt; </span>
                (<span className="number">1</span>,<span className="number"> 2</span>) + (<span className="number">3</span>,<span className="number"> 4</span>)<br/>
                (1, 2, 3, 4)<br/>
                <span className="arrow">&gt;&gt;&gt; </span>
                (<span className="number">1</span>,<span className="number"> 2</span>) * <span className="number">5</span><br/>
                (1, 2, 1, 2, 1, 2, 1, 2, 1, 2)
            </div>
        </div>
    );
};

export default TuplesPage;
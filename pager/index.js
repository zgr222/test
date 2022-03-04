let container;
const total = 300;
const limit = 10;

function init() {
    container = document.createElement('div');
    container.className = 'pager';
    document.body.appendChild(container);

    createPagers(1, limit, total);
}

init();

/**
 * 
 * @param {*} page 当前页码
 * @param {*} limit 一页最大包含数据
 * @param {*} total 全部数据
 */
function createPagers(page, limit, total) {
    container.innerHTML = '';

    /**
     * 
     * @param {*} text 标签的文本   
     * @param {*} status 标签的状态 空字符串-普通状态，disabled-禁用状态，active-选中状态
     * @param {*} targetPage 
     */
    function createTag(text, status, targetPage) {
        const span = document.createElement('span');
        span.innerText = text;
        container.appendChild(span);
        span.className = status;
        if (status === '') {
            span.onclick = function () {
                createPagers(targetPage, limit, total);
            }
        }

    }

    const pageNumber = Math.ceil(total / limit);
    // 1.首页
    createTag('首页', page === 1 ? 'disabled' : '', 1);
    // 2.上一页
    createTag('上一页', page === 1 ? 'disabled' : '', page - 1);
    // 3.首页
    const countPage = 10;  //最多显示多少页码
    let min = Math.floor(page - countPage / 2);
    min < 1 && (min = 1);
    let max = min + countPage - 1;
    max > pageNumber && (max = pageNumber);
    for (let i = min; i <= max; i++) {
        createTag(i, i === page ? 'active' : '', i);
    }
    // 4.下一页
    createTag('下一页', page === pageNumber ? 'disabled' : '', page + 1);
    // 5.尾页
    createTag('尾页', page === pageNumber ? 'disabled' : '', pageNumber);
}
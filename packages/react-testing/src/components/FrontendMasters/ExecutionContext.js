function move() {
    const boxR = document.getElementsByClassName("box-r")[0];
    let left = parseInt(boxR.style.left) || 0;

    // move by 1px;
    boxR.style.left = `${left + 1}px`;
    requestAnimationFrame(move);
}

function moveWithSetTimeout() {
    const boxT = document.getElementsByClassName("box-t")[0];
    let left = parseInt(boxT.style.left) || 0;
    // move by 1px;
    boxT.style.left = `${left + 1}px`;
    setTimeout(moveWithSetTimeout, 7);
}

// Task queues has 4 priority queue:
// micro-task > RAF > rendering pipeline > macro-task
// micro-task includes promises, catch, then finally etc.
// Macro task includes setTimeout, setInterval etc.

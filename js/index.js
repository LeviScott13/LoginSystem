const guideList = document.querySelector('.guides');

//setup guides
const setupGuides = (data) => {

    let html = '';
    data.forEach(doc => {
        const guide = doc.data();
        const li = `
            <li>
                <div class="collapsible-header grey lighten-4"><span>Type:</span><br><br>${guide.title}</div>
                <div class="collapsible-body white"><span>Contents:</span><br><br>${guide.content}</div>
            <\li>
        `;
        html += li;
    });

    guideList.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  });
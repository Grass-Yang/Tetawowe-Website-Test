const worksContainer = document.getElementById('works-grid');
const preview = document.getElementById('preview-image');

fetch('thumbnails.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(project => {
      const projectItem = document.createElement('a');
      projectItem.className = 'project-item';
      projectItem.href = "#";
      
      // 缩略图
      const img = document.createElement('img');
      img.src = project.image;
      img.alt = project.title;
      projectItem.appendChild(img);

      // 标题
      const title = document.createElement('div');
      title.textContent = project.title;
      projectItem.appendChild(title);

      // 悬停显示大图
      projectItem.dataset.image = project.image;

      worksContainer.appendChild(projectItem);
    });
  })
  .catch(err => console.error("Failed to load thumbnails.json:", err));


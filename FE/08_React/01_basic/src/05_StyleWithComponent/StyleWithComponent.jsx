// Solution 1: - Ảnh hưởng toàn bộ APP
import '../assets/css/style.css';

// Solution 2: - Import dạng module (Khi class là 1 state)
import style from "./styleWithComponent.module.css";

// Solution 3: Inline Style - Ảnh hưởng ngay selector đó
// Solution 4: CSS-in-JS Libraries - Thư viện cho phép viết CSS ngay trong JS file.

const StyleWithComponent = () => {
  return (
    <div className='container'>
      <h1 className="text-center mb-4">Section 05: Style Component</h1>

      <p className='p-danger'>Lorem ipsum dolor sit amet.</p>
      <p className={`${style['text-green']} bg-light py-2`}>CSS module</p>
      <p style={{color: 'darkviolet', background: 'pink',padding: '10px'}}>Inline Style</p>
    </div>
  )
}

export default StyleWithComponent;

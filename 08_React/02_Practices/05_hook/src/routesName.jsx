import Mounting from './pages/DemoUseEffect/01_Mounting/Mounting';
import UnMount from './pages/DemoUseEffect/01_Mounting/UnMount';
import Updating from './pages/DemoUseEffect/01_Mounting/Updating';
import UseParam from './pages/HandleUrl/UseParam';
import UseCallback from './pages/Optimize/UseCallback';
import UseMemo from './pages/Optimize/UseMemo';

const ROUTES_NAME = [
  {
    name: "Life Cycle",
    des: [
      "useEffect(callback, deps?): thực hiện được cả 3 phase: mounting, updating và unmount",
      "deps (Dependencies) dùng để so sánh lần render trước và sau. Nếu có bất kỳ giá trị nào trong deps thay đổi thì callback sẽ thực thi",
      "callback có thể trả về function (Cleanup function), hàm sẽ chạy khi component unmount hoặc deps thay đổi. Cleanup function từ lần thực thi trước của effect sẽ được thực thi trước khi effect mới được thực thi."
    ],
    path: "lifecycle",
    subs: [
      {
        name: "Mounting",
        des: [
          "Sau khi component được mount"
        ],
        path: "mounting",
        component: Mounting,
      },
      {
        name: "Updating",
        des: [
          "Khi có state, props thay đổi, component sẽ re-render để cập nhật giá trị thay đổi",
        ],
        path: "updating",
        component: Updating,
      },
      {
        name: "Unmount",
        des: [
          "Khi component được gỡ khỏi DOM",
        ],
        path: "unmount",
        component: UnMount,
      },
    ],
  },
  {
    name: "Optimize",
    des: [],
    path: "optimize",
    subs: [
      {
        name: "useCallback()",
        des: [
          "Cache lại giá trị mới của hàm. Khi có 1 deps thay đổi, useCallback() tạo lại 1 hàm mới",
          "Các child component cần phải wrapp bởi memo(ChildComponent)"
        ],
        path: "usecallback",
        component: UseCallback,
      },
      {
        name: "useMemo()",
        des: [
          "Cache lại giá trị mới của biến. Khi có 1 deps thay đổi, useMemo() tạo lại giá trị",
          "Các child component cần phải wrapp bởi memo(ChildComponent)"
        ],
        path: "usememo",
        component: UseMemo,
      },
    ],
  },
  {
    name: "Handle URL",
    des: [
      "Các hook xử lý với URL"
    ],
    path: "handleUrl",
    subs: [
      {
        name: "useParam()",
        des: [
          "Lấy param trên url"
        ],
        path: "useparam",
        component: UseParam,
        options: {
          idParam: ':idProduct'
        }
      },
    ],
  },
];

export default ROUTES_NAME;

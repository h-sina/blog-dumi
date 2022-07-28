// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'C:/Users/sina/Desktop/myapp/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('../dumi/layout').default],
    "component": ((props) => {
        const React = require('react');
        const { default: getDemoRenderArgs } = require('C:/Users/sina/Desktop/myapp/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/es/builtins/Previewer.js');
        const { usePrefersColor, context } = require('dumi/theme');

        
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        })
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('../dumi/layout').default, require('C:/Users/sina/Desktop/myapp/node_modules/dumi-theme-default/es/layout.js').default],
    "routes": [
      {
        "path": "/",
        "component": require('C:/Users/sina/Desktop/myapp/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1658993409580,
          "hero": {
            "title": "sina's前端大本营",
            "desc": "<div class=\"markdown\"><p>浓缩就是精华，这里汇总我学习~~~</p></div>",
            "actions": [
              {
                "text": "从01开始",
                "link": "web"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "汇总",
              "desc": "<div class=\"markdown\"><p>前端学习基地</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "冲刺",
              "desc": "<div class=\"markdown\"><p>offer up up</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "代码",
              "desc": "<div class=\"markdown\"><p>疯狂码代码</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Hello!",
              "heading": "hello"
            },
            {
              "depth": 3,
              "value": "Github",
              "heading": "github"
            },
            {
              "depth": 3,
              "value": "掘金",
              "heading": "掘金"
            },
            {
              "depth": 3,
              "value": "语雀",
              "heading": "语雀"
            },
            {
              "depth": 3,
              "value": "CSDN",
              "heading": "csdn"
            }
          ],
          "title": "Hello!"
        },
        "title": "Hello! - H前端本营"
      },
      {
        "path": "/algorithm",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/index.md",
          "updatedTime": 1658989555914,
          "nav": {
            "title": "算法",
            "order": 3,
            "path": "/algorithm"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "算法路漫漫",
              "heading": "算法路漫漫"
            }
          ],
          "title": "算法路漫漫"
        },
        "title": "算法路漫漫 - H前端本营"
      },
      {
        "path": "/algorithm/二叉树",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/二叉树/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/二叉树/index.md",
          "updatedTime": 1658992219606,
          "slugs": [
            {
              "depth": 1,
              "value": "二叉树",
              "heading": "二叉树"
            },
            {
              "depth": 2,
              "value": "八皇后待写",
              "heading": "八皇后待写"
            },
            {
              "depth": 2,
              "value": "前序遍历",
              "heading": "前序遍历"
            },
            {
              "depth": 2,
              "value": "中序遍历",
              "heading": "中序遍历"
            },
            {
              "depth": 2,
              "value": "后序遍历",
              "heading": "后序遍历"
            },
            {
              "depth": 2,
              "value": "二叉树的高度",
              "heading": "二叉树的高度"
            }
          ],
          "title": "二叉树",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/二叉树",
            "title": "二叉树"
          }
        },
        "title": "二叉树 - H前端本营"
      },
      {
        "path": "/algorithm/力扣合集",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/力扣合集/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/力扣合集/index.md",
          "updatedTime": 1658991655997,
          "slugs": [
            {
              "depth": 1,
              "value": "力扣合集",
              "heading": "力扣合集"
            },
            {
              "depth": 2,
              "value": "视频资源",
              "heading": "视频资源"
            },
            {
              "depth": 2,
              "value": "题目资源",
              "heading": "题目资源"
            },
            {
              "depth": 2,
              "value": "博客讲解",
              "heading": "博客讲解"
            },
            {
              "depth": 1,
              "value": "刷题记录",
              "heading": "刷题记录"
            },
            {
              "depth": 2,
              "value": "第一天",
              "heading": "第一天"
            },
            {
              "depth": 2,
              "value": "第二天",
              "heading": "第二天"
            },
            {
              "depth": 4,
              "value": "https://leetcode.cn/problems/letter-combinations-of-a-phone-number/",
              "heading": "httpsleetcodecnproblemsletter-combinations-of-a-phone-number"
            },
            {
              "depth": 2,
              "value": "第三天",
              "heading": "第三天"
            },
            {
              "depth": 2,
              "value": "第四天",
              "heading": "第四天"
            },
            {
              "depth": 2,
              "value": "第五天(2022/6/27)",
              "heading": "第五天2022627"
            },
            {
              "depth": 2,
              "value": "第六天",
              "heading": "第六天"
            },
            {
              "depth": 2,
              "value": "第七天",
              "heading": "第七天"
            },
            {
              "depth": 2,
              "value": "第八天(2022/7/1)",
              "heading": "第八天202271"
            },
            {
              "depth": 2,
              "value": "第九天",
              "heading": "第九天"
            },
            {
              "depth": 2,
              "value": "第十天",
              "heading": "第十天"
            },
            {
              "depth": 2,
              "value": "第11天（2022/7/7）",
              "heading": "第11天202277"
            }
          ],
          "title": "力扣合集",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/力扣合集",
            "title": "力扣合集"
          }
        },
        "title": "力扣合集 - H前端本营"
      },
      {
        "path": "/algorithm/动态规划",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/动态规划/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/动态规划/index.md",
          "updatedTime": 1658990012779,
          "slugs": [
            {
              "depth": 1,
              "value": "动态规划",
              "heading": "动态规划"
            }
          ],
          "title": "动态规划",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/动态规划",
            "title": "动态规划"
          }
        },
        "title": "动态规划 - H前端本营"
      },
      {
        "path": "/algorithm/排序",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/排序/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/排序/index.md",
          "updatedTime": 1658992067900,
          "slugs": [
            {
              "depth": 1,
              "value": "排序",
              "heading": "排序"
            },
            {
              "depth": 2,
              "value": "快排",
              "heading": "快排"
            },
            {
              "depth": 2,
              "value": "归并排序",
              "heading": "归并排序"
            },
            {
              "depth": 2,
              "value": "冒泡排序",
              "heading": "冒泡排序"
            },
            {
              "depth": 2,
              "value": "选择排序",
              "heading": "选择排序"
            },
            {
              "depth": 2,
              "value": "插入排序",
              "heading": "插入排序"
            }
          ],
          "title": "排序",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/排序",
            "title": "排序"
          }
        },
        "title": "排序 - H前端本营"
      },
      {
        "path": "/algorithm/数组",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/数组/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/数组/index.md",
          "updatedTime": 1658992276294,
          "slugs": [
            {
              "depth": 1,
              "value": "数组",
              "heading": "数组"
            },
            {
              "depth": 2,
              "value": "螺旋矩阵",
              "heading": "螺旋矩阵"
            },
            {
              "depth": 2,
              "value": "螺旋矩阵",
              "heading": "螺旋矩阵-1"
            }
          ],
          "title": "数组",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/数组",
            "title": "数组"
          }
        },
        "title": "数组 - H前端本营"
      },
      {
        "path": "/algorithm/贪心",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/贪心/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/贪心/index.md",
          "updatedTime": 1658992142221,
          "slugs": [
            {
              "depth": 1,
              "value": "贪心",
              "heading": "贪心"
            },
            {
              "depth": 2,
              "value": "合并区间",
              "heading": "合并区间"
            },
            {
              "depth": 2,
              "value": "最长重复子串",
              "heading": "最长重复子串"
            },
            {
              "depth": 2,
              "value": "最长递增子序列",
              "heading": "最长递增子序列"
            },
            {
              "depth": 2,
              "value": "最长回文串",
              "heading": "最长回文串"
            }
          ],
          "title": "贪心",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/贪心",
            "title": "贪心"
          }
        },
        "title": "贪心 - H前端本营"
      },
      {
        "path": "/algorithm/队列",
        "component": require('C:/Users/sina/Desktop/myapp/docs/algorithm/队列/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/algorithm/队列/index.md",
          "updatedTime": 1658992185863,
          "slugs": [
            {
              "depth": 1,
              "value": "队列",
              "heading": "队列"
            },
            {
              "depth": 2,
              "value": "两个栈模拟队列",
              "heading": "两个栈模拟队列"
            },
            {
              "depth": 2,
              "value": "用队列实现栈",
              "heading": "用队列实现栈"
            }
          ],
          "title": "队列",
          "nav": {
            "path": "/algorithm",
            "title": "算法"
          },
          "group": {
            "path": "/algorithm/队列",
            "title": "队列"
          }
        },
        "title": "队列 - H前端本营"
      },
      {
        "path": "/network",
        "component": require('C:/Users/sina/Desktop/myapp/docs/network/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/network/index.md",
          "updatedTime": 1658991364009,
          "nav": {
            "title": "计算机网络",
            "order": 2,
            "path": "/network"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "首页",
              "heading": "首页"
            },
            {
              "depth": 2,
              "value": "http status - 状态码",
              "heading": "http-status---状态码"
            }
          ],
          "title": "首页"
        },
        "title": "首页 - H前端本营"
      },
      {
        "path": "/network/安全",
        "component": require('C:/Users/sina/Desktop/myapp/docs/network/安全/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/network/安全/index.md",
          "updatedTime": 1658991309630,
          "slugs": [
            {
              "depth": 1,
              "value": "xss攻击讲一下，如何预防？",
              "heading": "xss攻击讲一下如何预防"
            }
          ],
          "title": "xss攻击讲一下，如何预防？",
          "nav": {
            "path": "/network",
            "title": "计算机网络"
          },
          "group": {
            "path": "/network/安全",
            "title": "安全"
          }
        },
        "title": "xss攻击讲一下，如何预防？ - H前端本营"
      },
      {
        "path": "/network/网络模型/osi7层",
        "component": require('C:/Users/sina/Desktop/myapp/docs/network/网络模型/OSI7层.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/network/网络模型/OSI7层.md",
          "updatedTime": 1658991252813,
          "slugs": [
            {
              "depth": 1,
              "value": "OSI七层模型",
              "heading": "osi七层模型"
            },
            {
              "depth": 3,
              "value": "（🐖IOS是国际标准化组织）",
              "heading": "ios是国际标准化组织"
            }
          ],
          "title": "OSI七层模型",
          "nav": {
            "path": "/network",
            "title": "计算机网络"
          },
          "group": {
            "path": "/network/网络模型",
            "title": "网络模型"
          }
        },
        "title": "OSI七层模型 - H前端本营"
      },
      {
        "path": "/other",
        "component": require('C:/Users/sina/Desktop/myapp/docs/other/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/other/index.md",
          "updatedTime": 1658990096328,
          "nav": {
            "title": "其他",
            "order": 4,
            "path": "/other"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "其他",
              "heading": "其他"
            }
          ],
          "title": "其他"
        },
        "title": "其他 - H前端本营"
      },
      {
        "path": "/other/git",
        "component": require('C:/Users/sina/Desktop/myapp/docs/other/Git/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/other/Git/index.md",
          "updatedTime": 1658992539355,
          "slugs": [
            {
              "depth": 1,
              "value": "Git",
              "heading": "git"
            },
            {
              "depth": 2,
              "value": "git的基本操作",
              "heading": "git的基本操作"
            }
          ],
          "title": "Git",
          "nav": {
            "path": "/other",
            "title": "其他"
          },
          "group": {
            "path": "/other/git",
            "title": "Git"
          }
        },
        "title": "Git - H前端本营"
      },
      {
        "path": "/other/设计模式",
        "component": require('C:/Users/sina/Desktop/myapp/docs/other/设计模式/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/other/设计模式/index.md",
          "updatedTime": 1658992473961,
          "slugs": [
            {
              "depth": 1,
              "value": "设计模式",
              "heading": "设计模式"
            },
            {
              "depth": 2,
              "value": "工厂模式",
              "heading": "工厂模式"
            },
            {
              "depth": 2,
              "value": "抽象工厂模式",
              "heading": "抽象工厂模式"
            },
            {
              "depth": 2,
              "value": "单例模式",
              "heading": "单例模式"
            },
            {
              "depth": 2,
              "value": "原型模式",
              "heading": "原型模式"
            },
            {
              "depth": 2,
              "value": "代理模式",
              "heading": "代理模式"
            },
            {
              "depth": 2,
              "value": "迭代器模式",
              "heading": "迭代器模式"
            },
            {
              "depth": 2,
              "value": "观察者模式",
              "heading": "观察者模式"
            }
          ],
          "title": "设计模式",
          "nav": {
            "path": "/other",
            "title": "其他"
          },
          "group": {
            "path": "/other/设计模式",
            "title": "设计模式"
          }
        },
        "title": "设计模式 - H前端本营"
      },
      {
        "path": "/web",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/index.md",
          "updatedTime": 1658991518060,
          "nav": {
            "title": "前端",
            "order": 1,
            "path": "/web"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "首页",
              "heading": "首页"
            },
            {
              "depth": 2,
              "value": "研发流程",
              "heading": "研发流程"
            }
          ],
          "title": "首页"
        },
        "title": "首页 - H前端本营"
      },
      {
        "path": "/web/css",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/CSS/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/CSS/index.md",
          "updatedTime": 1658990669507,
          "slugs": [
            {
              "depth": 1,
              "value": "CSS",
              "heading": "css"
            },
            {
              "depth": 2,
              "value": "居中",
              "heading": "居中"
            },
            {
              "depth": 2,
              "value": "flex: 1",
              "heading": "flex-1"
            },
            {
              "depth": 2,
              "value": "一列自适应一列固定",
              "heading": "一列自适应一列固定"
            }
          ],
          "title": "CSS",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/css",
            "title": "CSS"
          }
        },
        "title": "CSS - H前端本营"
      },
      {
        "path": "/web/html/html5新特性",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/HTML/HTML5新特性.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/HTML/HTML5新特性.md",
          "updatedTime": 1658991166342,
          "slugs": [
            {
              "depth": 1,
              "value": "HTML5特性",
              "heading": "html5特性"
            },
            {
              "depth": 4,
              "value": "语义化标签",
              "heading": "语义化标签"
            },
            {
              "depth": 4,
              "value": "浏览器支持",
              "heading": "浏览器支持"
            },
            {
              "depth": 4,
              "value": "多媒体标签",
              "heading": "多媒体标签"
            },
            {
              "depth": 4,
              "value": "Canvas画布",
              "heading": "canvas画布"
            },
            {
              "depth": 4,
              "value": "SVG",
              "heading": "svg"
            },
            {
              "depth": 4,
              "value": "本地存储 localStorage sessionStorage",
              "heading": "本地存储-localstorage-sessionstorage"
            },
            {
              "depth": 4,
              "value": "Web Sql",
              "heading": "web-sql"
            },
            {
              "depth": 4,
              "value": "应用缓存",
              "heading": "应用缓存"
            },
            {
              "depth": 4,
              "value": "无障碍",
              "heading": "无障碍"
            },
            {
              "depth": 4,
              "value": "拖放API ：draggable=\"true\" ondragstart=\"drag(event)\"",
              "heading": "拖放api-draggabletrue-ondragstartdragevent"
            },
            {
              "depth": 4,
              "value": "Web Worker",
              "heading": "web-worker"
            }
          ],
          "title": "HTML5特性",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/html",
            "title": "HTML"
          }
        },
        "title": "HTML5特性 - H前端本营"
      },
      {
        "path": "/web/html",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/HTML/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/HTML/index.md",
          "updatedTime": 1658991199049,
          "slugs": [
            {
              "depth": 1,
              "value": "HTML零碎",
              "heading": "html零碎"
            },
            {
              "depth": 2,
              "value": "title和alt的区别",
              "heading": "title和alt的区别"
            },
            {
              "depth": 2,
              "value": "href和src的区别",
              "heading": "href和src的区别"
            },
            {
              "depth": 2,
              "value": "对语义化的看法？",
              "heading": "对语义化的看法"
            },
            {
              "depth": 2,
              "value": "表示引用的标签是什么？",
              "heading": "表示引用的标签是什么"
            },
            {
              "depth": 2,
              "value": "表示列表的标签有多少个",
              "heading": "表示列表的标签有多少个"
            }
          ],
          "title": "HTML零碎",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/html",
            "title": "HTML"
          }
        },
        "title": "HTML零碎 - H前端本营"
      },
      {
        "path": "/web/java-script/es6",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/JavaScript/ES6.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/JavaScript/ES6.md",
          "updatedTime": 1658991859557,
          "slugs": [
            {
              "depth": 1,
              "value": "ES6",
              "heading": "es6"
            },
            {
              "depth": 2,
              "value": "let const",
              "heading": "let-const"
            },
            {
              "depth": 2,
              "value": "结构赋值",
              "heading": "结构赋值"
            },
            {
              "depth": 2,
              "value": "字符串的扩展",
              "heading": "字符串的扩展"
            },
            {
              "depth": 2,
              "value": "字符串新增方法",
              "heading": "字符串新增方法"
            },
            {
              "depth": 2,
              "value": "正则的扩展",
              "heading": "正则的扩展"
            },
            {
              "depth": 2,
              "value": "数值的扩展",
              "heading": "数值的扩展"
            },
            {
              "depth": 2,
              "value": "函数的扩展",
              "heading": "函数的扩展"
            },
            {
              "depth": 2,
              "value": "数组的扩展",
              "heading": "数组的扩展"
            },
            {
              "depth": 2,
              "value": "对象的扩展",
              "heading": "对象的扩展"
            },
            {
              "depth": 2,
              "value": "对象新增的方法",
              "heading": "对象新增的方法"
            },
            {
              "depth": 2,
              "value": "运算符的扩展",
              "heading": "运算符的扩展"
            },
            {
              "depth": 2,
              "value": "Symbol",
              "heading": "symbol"
            },
            {
              "depth": 2,
              "value": "Set和Map数据结构",
              "heading": "set和map数据结构"
            },
            {
              "depth": 2,
              "value": "Proxy",
              "heading": "proxy"
            },
            {
              "depth": 2,
              "value": "Reflect",
              "heading": "reflect"
            },
            {
              "depth": 2,
              "value": "Promise对象",
              "heading": "promise对象"
            },
            {
              "depth": 2,
              "value": "Iterator和for...of循环",
              "heading": "iterator和forof循环"
            },
            {
              "depth": 2,
              "value": "Generator函数的语法",
              "heading": "generator函数的语法"
            },
            {
              "depth": 2,
              "value": "Generator函数的异步应用",
              "heading": "generator函数的异步应用"
            },
            {
              "depth": 2,
              "value": "Async函数",
              "heading": "async函数"
            },
            {
              "depth": 2,
              "value": "Class函数/Class的继承",
              "heading": "class函数class的继承"
            },
            {
              "depth": 2,
              "value": "Module的加载实现",
              "heading": "module的加载实现"
            },
            {
              "depth": 2,
              "value": "编程风格/读懂规格",
              "heading": "编程风格读懂规格"
            },
            {
              "depth": 2,
              "value": "异步遍历器",
              "heading": "异步遍历器"
            },
            {
              "depth": 2,
              "value": "Weakmap",
              "heading": "weakmap"
            }
          ],
          "title": "ES6",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/java-script",
            "title": "JavaScript"
          }
        },
        "title": "ES6 - H前端本营"
      },
      {
        "path": "/web/java-script",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/JavaScript/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/JavaScript/index.md",
          "updatedTime": 1658989993345,
          "slugs": [
            {
              "depth": 1,
              "value": "JavaScript",
              "heading": "javascript"
            },
            {
              "depth": 2,
              "value": "JS 事件循环机制",
              "heading": "js-事件循环机制"
            },
            {
              "depth": 2,
              "value": "JS es6新内容",
              "heading": "js-es6新内容"
            },
            {
              "depth": 2,
              "value": "箭头函数和普通函数的区别？",
              "heading": "箭头函数和普通函数的区别"
            },
            {
              "depth": 2,
              "value": "",
              "heading": ""
            }
          ],
          "title": "JavaScript",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/java-script",
            "title": "JavaScript"
          }
        },
        "title": "JavaScript - H前端本营"
      },
      {
        "path": "/web/vue",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/Vue/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/Vue/index.md",
          "updatedTime": 1658990152860,
          "slugs": [],
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/vue",
            "title": "Vue"
          },
          "title": "Vue"
        },
        "title": "Vue - H前端本营"
      },
      {
        "path": "/web/浏览器",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/浏览器/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/浏览器/index.md",
          "updatedTime": 1658991059647,
          "slugs": [
            {
              "depth": 1,
              "value": "解读CSS DOM JS顺序",
              "heading": "解读css-dom-js顺序"
            }
          ],
          "title": "解读CSS DOM JS顺序",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/浏览器",
            "title": "浏览器"
          }
        },
        "title": "解读CSS DOM JS顺序 - H前端本营"
      },
      {
        "path": "/web/浏览器/跨域",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/浏览器/跨域.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/浏览器/跨域.md",
          "updatedTime": 1658991070050,
          "slugs": [
            {
              "depth": 1,
              "value": "浏览器加载的事件",
              "heading": "浏览器加载的事件"
            }
          ],
          "title": "浏览器加载的事件",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/浏览器",
            "title": "浏览器"
          }
        },
        "title": "浏览器加载的事件 - H前端本营"
      },
      {
        "path": "/web/浏览器/输入网址",
        "component": require('C:/Users/sina/Desktop/myapp/docs/web/浏览器/输入网址.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/web/浏览器/输入网址.md",
          "updatedTime": 1658991034490,
          "slugs": [
            {
              "depth": 1,
              "value": "讲讲浏览器从输入网址到打开网页的整个过程，越细致越好。",
              "heading": "讲讲浏览器从输入网址到打开网页的整个过程越细致越好"
            },
            {
              "depth": 1,
              "value": "跨域，相关的几个请求头的含义。",
              "heading": "跨域相关的几个请求头的含义"
            }
          ],
          "title": "讲讲浏览器从输入网址到打开网页的整个过程，越细致越好。",
          "nav": {
            "path": "/web",
            "title": "前端"
          },
          "group": {
            "path": "/web/浏览器",
            "title": "浏览器"
          }
        },
        "title": "讲讲浏览器从输入网址到打开网页的整个过程，越细致越好。 - H前端本营"
      },
      {
        "path": "/network/网络模型",
        "meta": {},
        "exact": true,
        "redirect": "/network/网络模型/osi7层"
      }
    ],
    "title": "H前端本营",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}

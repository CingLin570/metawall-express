const express = require('express');
const router = express.Router();
const PostsContollers = require('../controller/posts');
const { checkAuth } = require('../service/auth');

// 取得特定條件貼文
router.get('/posts', checkAuth, PostsContollers.getPosts);
  /**
   * #swagger.start
   * #swagger.path = '/posts'
   * #swagger.method = 'get'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '取得全部貼文 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.parameters['timeSort'] = {
      in: 'query',
      type: 'string',
      required: false,
      description: '排序：desc/asc'
    }
   * #swagger.parameters['q'] = {
      in: 'query',
      type: 'string',
      required: false,
      description: '關鍵字搜尋'
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: [{
          _id: '6278da02631ef7910e7adc37',
          content: '今天天氣真好',
          image: '',
          user: {
            _id: '6277b20ad980d4df45db6447',
            name: '小明',
            photo: ''
          },
          likes: [],
          createdAt: '2022-05-11T01:41:18.681Z'
        }]
      }
    }
  }
  * #swagger.end
  */

// 新增單一貼文
router.post('/post', checkAuth, PostsContollers.createPost);
  /**
   * #swagger.start
   * #swagger.path = '/post'
   * #swagger.method = 'post'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '新增單筆貼文 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.parameters['body'] = {
      in: 'body',
      type: 'object',
      required: true,
      description: '資料格式',
      schema: {
        $content: '今天天氣真好',
        image: 'https://i.imgur.com/ktss1mN.jpg',
      }
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: [{
          _id: '6278b537c393fa2485a7eea4',
          content: '今天天氣真好',
          image: 'https://i.imgur.com/ktss1mN.jpg',
          user: {
            _id: '6277b20ad980d4df45db6447',
            name: 'Johnny',
            photo: ''
          },
        likes: [],
        createdAt: '2022-05-11T01:41:18.681Z'
        }]
      }
    }
  }
  * #swagger.end
  */

// 刪除全部貼文
router.delete('/posts', checkAuth, PostsContollers.deleteAllPosts);
  /**
   * #swagger.start
   * #swagger.path = '/posts'
   * #swagger.method = 'delete'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '刪除全部貼文 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: {
          acknowledged: true,
          deletedCount: 10
        }
      }
    }
  * #swagger.end
  */

// 刪除單一貼文
router.delete('/post/:id', checkAuth, PostsContollers.deleteOnePost);
  /**
   * #swagger.start
   * #swagger.path = '/post/{id}'
   * #swagger.method = 'delete'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.description = '刪除單筆貼文 API'
   * #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      required: true,
      description: '貼文ID'
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: {
          _id: '627b143e88edb2f730f97feb',
          content: '今天天氣真好',
          image: 'https://i.imgur.com/ktss1mN.jpg',
          user: '6277b20ad980d4df45db6447',
          likes: [],
          createdAt: '2022-05-11T01:41:18.681Z'
        }
      }
    }
  * #swagger.end
  */

// 修改單一貼文
router.patch('/post/:id', checkAuth, PostsContollers.updatePost);
  /**
   * #swagger.start
   * #swagger.path = '/post/{id}'
   * #swagger.method = 'patch'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '修改單筆貼文 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      required: true,
      description: '貼文ID'
    }
   * #swagger.parameters['body'] = {
      in: 'body',
      type: 'object',
      required: true,
      description: '資料格式',
      schema: {
        $content: '今天天氣真好',
        image: 'https://i.imgur.com/ktss1mN.jpg',
        user: '6277b20ad980d4df45db6447',
      }
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: {
        _id: '627b143e88edb2f730f97feb',
        content: '今天天氣真好',
        image: 'https://i.imgur.com/ktss1mN.jpg',
        user: '6277b20ad980d4df45db6447',
        likes: [],
        createdAt: '2022-05-11T01:41:18.681Z'
      }
    }
  }
  * #swagger.end
  */
// 新增特定貼文按讚
router.post('/post/:id/likes', checkAuth, PostsContollers.createLike);
  /**
   * #swagger.start
   * #swagger.path = '/post/{id}/likes'
   * #swagger.method = 'post'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '新增特定貼文按讚 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      required: true,
      description: '貼文ID'
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: {
        _id: '627b143e88edb2f730f97feb',
        content: '今天天氣真好',
        image: 'https://i.imgur.com/ktss1mN.jpg',
        user: '6277b20ad980d4df45db6447',
        likes: [
          '6295818161225bb583801a84'
        ],
        createdAt: '2022-05-11T01:41:18.681Z'
      }
    }
  }
  * #swagger.end
  */
// 刪除特定貼文按讚
router.delete('/post/:id/likes', checkAuth, PostsContollers.deleteLike);
  /**
   * #swagger.start
   * #swagger.path = '/post/{id}/likes'
   * #swagger.method = 'delete'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '刪除特定貼文按讚 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      required: true,
      description: '貼文ID'
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: {
        _id: '627b143e88edb2f730f97feb',
        content: '今天天氣真好',
        image: 'https://i.imgur.com/ktss1mN.jpg',
        user: '6277b20ad980d4df45db6447',
        likes: [],
        createdAt: '2022-05-11T01:41:18.681Z'
      }
    }
  }
  * #swagger.end
  */
//取得個人所有貼文列表
router.get('/post/user/:id', checkAuth, PostsContollers.getOwnPosts);
  /**
   * #swagger.start
   * #swagger.path = '/post/user/{id}'
   * #swagger.method = 'get'
   * #swagger.tags = ['Posts - 貼文']
   * #swagger.description = '取得個人所有貼文列表 API'
   * #swagger.parameters['Authorization'] = {
      in: 'header',
      type: 'string',
      required: true,
      description: 'Bearer token'
    }
   * #swagger.parameters['id'] = {
      in: 'path',
      type: 'string',
      required: true,
      description: '使用者ID'
    }
   * #swagger.responses[200] = {
      description: '貼文資訊',
      schema: {
        status: 'success',
        message: {
        _id: '627b143e88edb2f730f97feb',
        content: '今天天氣真好',
        image: 'https://i.imgur.com/ktss1mN.jpg',
        user: '6277b20ad980d4df45db6447',
        likes: [
          '6295818161225bb583801a84'
        ],
        createdAt: '2022-05-11T01:41:18.681Z'
      }
    }
  }
  * #swagger.end
  */

module.exports = router;

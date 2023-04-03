/*
 Navicat Premium Data Transfer

 Source Server         : chengjiang_09
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : online_design

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 03/04/2023 17:33:08
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for canvas_header_menu
-- ----------------------------
DROP TABLE IF EXISTS `canvas_header_menu`;
CREATE TABLE `canvas_header_menu`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of canvas_header_menu
-- ----------------------------

-- ----------------------------
-- Table structure for charts
-- ----------------------------
DROP TABLE IF EXISTS `charts`;
CREATE TABLE `charts`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `author_id` int NULL DEFAULT NULL,
  `origin_author_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `origin_author_id` int NULL DEFAULT NULL,
  `data` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `group_id` int NULL DEFAULT NULL COMMENT '通过组ID决定模板的显示对象',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `context` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of charts
-- ----------------------------

-- ----------------------------
-- Table structure for components
-- ----------------------------
DROP TABLE IF EXISTS `components`;
CREATE TABLE `components`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `template_id` int NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgPath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `default`(`template_id` ASC) USING BTREE,
  CONSTRAINT `default` FOREIGN KEY (`template_id`) REFERENCES `template_classification` (`children_roleId`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of components
-- ----------------------------
INSERT INTO `components` VALUES ('2023-04-03 15:42:51', '2023-04-03 15:42:53', NULL, 1, 1, '容器盒子', 'panel', NULL, 'el-icon-box', 'designPanel');
INSERT INTO `components` VALUES ('2023-04-03 15:43:50', '2023-04-03 15:43:52', NULL, 2, 1, '布局盒子', 'layout', NULL, NULL, 'designLayout');
INSERT INTO `components` VALUES ('2023-04-03 15:47:01', '2023-04-03 15:47:03', NULL, 3, 1, '标题盒子', 'title', 'https://img0.baidu.com/it/u=2102354730,4274661238&fm=253&fmt=auto&app=138&f=PNG?w=500&h=275', NULL, 'designTitle');
INSERT INTO `components` VALUES ('2023-04-03 15:47:39', '2023-04-03 15:47:41', NULL, 4, 2, '折线图', 'lineChart', NULL, NULL, 'designChart');
INSERT INTO `components` VALUES ('2023-04-03 15:48:45', '2023-04-03 15:48:47', NULL, 5, 3, '修狗图片', 'img', NULL, NULL, 'designImg');

-- ----------------------------
-- Table structure for conponents_defaults
-- ----------------------------
DROP TABLE IF EXISTS `conponents_defaults`;
CREATE TABLE `conponents_defaults`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conponents_defaults
-- ----------------------------
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:49:55', '2023-04-03 15:49:57', NULL, 'panel', 'configure', NULL, 'configureList', '容器配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:52:12', '2023-04-03 15:52:14', NULL, 'panel', 'dataFrom', NULL, 'dataFromList', '数据源配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:52:47', '2023-04-03 15:52:49', NULL, 'layout', 'configure', NULL, 'configureList', '布局配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:53:28', '2023-04-03 15:53:30', NULL, 'title', 'configure', NULL, 'configureList', '标题配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:56:27', '2023-04-03 15:56:29', NULL, 'lineChart', 'configure', NULL, 'configureList', '折线图配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:57:13', '2023-04-03 15:57:15', NULL, 'lineChart', 'position', NULL, 'configureList', '定位配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 15:58:12', '2023-04-03 15:58:16', NULL, 'lineChart', 'dataFrom', NULL, 'dataFromList', '数据源配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 17:27:53', '2023-04-03 17:27:55', NULL, 'img', 'configure', NULL, 'configureList', '数据源配置');
INSERT INTO `conponents_defaults` VALUES ('2023-04-03 17:28:27', '2023-04-03 17:28:29', NULL, 'img', 'position', NULL, 'configureList', '定位配置');

-- ----------------------------
-- Table structure for conponents_defaults_configures
-- ----------------------------
DROP TABLE IF EXISTS `conponents_defaults_configures`;
CREATE TABLE `conponents_defaults_configures`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `defaults_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `defaults_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `disabled` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `json` json NULL COMMENT '这个字段直接存例如echarts的静态数据',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conponents_defaults_configures
-- ----------------------------
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:03:36', '2023-04-03 16:03:38', NULL, 1, 'configure', 'panel', '标题', 'title', 'configureInput', '容器标题', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:14:03', '2023-04-03 16:14:06', NULL, 2, 'configure', 'panel', '背景图片url', 'backgroundImage', 'configureInput', NULL, NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:15:03', '2023-04-03 16:15:05', NULL, 3, 'configure', 'panel', '背景颜色', 'backgroundColor', 'configureColor', 'rgba(0, 0, 0, 0)', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:15:51', '2023-04-03 16:15:53', NULL, 4, 'configure', 'panel', '背景透明度', 'opacity', 'configureInput', '1', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:16:42', '2023-04-03 16:16:45', NULL, 5, 'configure', 'panel', '字体大小(px)', 'fontSize', 'configureInput', '16', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:17:17', '2023-04-03 16:17:19', NULL, 6, 'configure', 'panel', '字体颜色', 'color', 'configureColor', '#000000', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:21:39', '2023-04-03 16:21:41', NULL, 7, 'configure', 'layout', '布局类型', 'item', 'configureLayoutConfig', 'scattered', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:23:39', '2023-04-03 16:23:42', NULL, 8, 'configure', 'title', '高度(%)', 'height', 'configureInput', '10', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:26:58', '2023-04-03 16:27:01', NULL, 9, 'configure', 'title', '标题', 'title', 'configureInput', '容器标题', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:27:33', '2023-04-03 16:27:36', NULL, 10, 'configure', 'title', '背景颜色', 'backgroundColor', 'configureColor', 'rgba(0, 0, 0, 0)', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:28:15', '2023-04-03 16:28:18', NULL, 11, 'configure', 'title', '背景图片url', 'backgroundImage', 'configureInput', NULL, NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:28:48', '2023-04-03 16:28:50', NULL, 12, 'configure', 'title', '背景透明度', 'opacity', 'configureInput', '1', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:29:18', '2023-04-03 16:29:20', NULL, 13, 'configure', 'title', '字体大小(px)', 'fontSize', 'configureInput', '16', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:29:56', '2023-04-03 16:29:58', NULL, 14, 'configure', 'title', '字体颜色', 'color', 'configureColor', '#000000', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:31:10', '2023-04-03 16:31:12', NULL, 15, 'configure', 'lineChart', '标题配置', 'title', 'configureChartList', NULL, NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 16:59:59', '2023-04-03 17:00:01', NULL, 16, 'position', 'lineChart', '宽度(px)', 'width', 'configureInput', '500', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:09:04', '2023-04-03 17:09:06', NULL, 17, 'position', 'lineChart', '高度(px)', 'height', 'configureInput', '450', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:09:43', '2023-04-03 17:09:45', NULL, 18, 'position', 'lineChart', 'top(px)', 'top', 'configureInput', '0', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:10:28', '2023-04-03 17:10:31', NULL, 19, 'position', 'lineChart', 'left(px)', 'left', 'configureInput', '0', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:11:42', '2023-04-03 17:11:45', NULL, 20, 'dataSource', 'lineChart', '静态数据源', 'staticData', NULL, '', NULL, '{\"xAxis\": {\"data\": [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"], \"type\": \"category\"}, \"yAxis\": {\"type\": \"value\"}, \"series\": [{\"data\": [150, 230, 224, 218, 135, 147, 260], \"type\": \"line\"}]}');
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:25:26', '2023-04-03 17:25:29', NULL, 21, 'dataSource', 'lineChart', '动态数据源url', 'dynamicDataUrl', NULL, NULL, NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:26:19', '2023-04-03 17:26:22', NULL, 22, 'configure', 'img', '图片url', 'src', 'configureInput', 'https://img1.baidu.com/it/u=1795611050,2013221134&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800', NULL, NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:29:11', '2023-04-03 17:29:14', NULL, 23, 'position', 'img', '宽度(px)', 'width', 'configureInput', '500', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:31:23', '2023-04-03 17:31:25', NULL, 24, 'position', 'img', '高度(px)', 'height', 'configureInput', '450', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:31:48', '2023-04-03 17:31:51', NULL, 25, 'position', 'img', 'top(px)', 'top', 'configureInput', '0', '1', NULL);
INSERT INTO `conponents_defaults_configures` VALUES ('2023-04-03 17:32:12', '2023-04-03 17:32:14', NULL, 26, 'position', 'img', 'left(px)', 'left', 'configureInput', '0', '1', NULL);

-- ----------------------------
-- Table structure for conponents_defaults_configures_chart_value
-- ----------------------------
DROP TABLE IF EXISTS `conponents_defaults_configures_chart_value`;
CREATE TABLE `conponents_defaults_configures_chart_value`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `configure_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `configure_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conponents_defaults_configures_chart_value
-- ----------------------------
INSERT INTO `conponents_defaults_configures_chart_value` VALUES ('2023-04-03 16:35:35', '2023-04-03 16:35:38', NULL, 1, 'title', 'lineChart', '标题', 'text', 'configureInput', '折线图标题');
INSERT INTO `conponents_defaults_configures_chart_value` VALUES ('2023-04-03 16:37:35', '2023-04-03 16:37:38', NULL, 2, 'title', 'lineChart', '显示', 'show', 'configureSwitch', '1');
INSERT INTO `conponents_defaults_configures_chart_value` VALUES ('2023-04-03 16:40:58', '2023-04-03 16:41:00', NULL, 3, 'title', 'lineChart', '标题超链接', 'link', 'configureInput', NULL);
INSERT INTO `conponents_defaults_configures_chart_value` VALUES ('2023-04-03 16:41:23', '2023-04-03 16:41:25', NULL, 4, 'title', 'lineChart', '标题样式', 'textStyle', 'configureChartList', NULL);

-- ----------------------------
-- Table structure for conponents_defaults_configures_chart_value_details
-- ----------------------------
DROP TABLE IF EXISTS `conponents_defaults_configures_chart_value_details`;
CREATE TABLE `conponents_defaults_configures_chart_value_details`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `configure_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `configure_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conponents_defaults_configures_chart_value_details
-- ----------------------------

-- ----------------------------
-- Table structure for conponents_defaults_configures_layout
-- ----------------------------
DROP TABLE IF EXISTS `conponents_defaults_configures_layout`;
CREATE TABLE `conponents_defaults_configures_layout`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conponents_defaults_configures_layout
-- ----------------------------
INSERT INTO `conponents_defaults_configures_layout` VALUES ('2023-04-03 16:24:04', '2023-04-03 16:24:07', NULL, 1, '散布局', 'scatteredLayout', 'scattered');
INSERT INTO `conponents_defaults_configures_layout` VALUES ('2023-04-03 16:25:07', '2023-04-03 16:25:08', NULL, 2, '左右布局', 'leftAndRightLayout', 'leftAndRight');
INSERT INTO `conponents_defaults_configures_layout` VALUES ('2023-04-03 16:25:47', '2023-04-03 16:25:50', NULL, 3, '网格布局', 'gridLayout', 'grid');

-- ----------------------------
-- Table structure for conponents_defaults_configures_predefinecolors
-- ----------------------------
DROP TABLE IF EXISTS `conponents_defaults_configures_predefinecolors`;
CREATE TABLE `conponents_defaults_configures_predefinecolors`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `color` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conponents_defaults_configures_predefinecolors
-- ----------------------------
INSERT INTO `conponents_defaults_configures_predefinecolors` VALUES ('2023-04-03 16:11:51', '2023-04-03 16:11:54', NULL, 1, '#00ced1');
INSERT INTO `conponents_defaults_configures_predefinecolors` VALUES ('2023-04-03 16:12:14', '2023-04-03 16:12:16', NULL, 2, '#1e90ff');
INSERT INTO `conponents_defaults_configures_predefinecolors` VALUES ('2023-04-03 16:12:28', '2023-04-03 16:12:31', NULL, 3, '#c71585');
INSERT INTO `conponents_defaults_configures_predefinecolors` VALUES ('2023-04-03 16:12:44', '2023-04-03 16:12:46', NULL, 4, 'rgba(255, 69, 0, 0.68)');
INSERT INTO `conponents_defaults_configures_predefinecolors` VALUES ('2023-04-03 16:13:01', '2023-04-03 16:13:04', NULL, 5, 'rgb(255, 120, 0)');
INSERT INTO `conponents_defaults_configures_predefinecolors` VALUES ('2023-04-03 16:13:16', '2023-04-03 16:13:20', NULL, 6, 'hsv(51, 100, 98)');

-- ----------------------------
-- Table structure for groups
-- ----------------------------
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `group_id` int NULL DEFAULT NULL,
  `group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of groups
-- ----------------------------
INSERT INTO `groups` VALUES ('2023-03-09 09:58:48', '2023-03-09 09:58:58', NULL, 1, 0, '个人');
INSERT INTO `groups` VALUES ('2023-03-09 09:59:27', '2023-03-09 09:59:31', NULL, 2, 1, '所有人');
INSERT INTO `groups` VALUES ('2023-03-09 09:59:49', '2023-03-09 09:59:53', NULL, 3, 2, '其他人');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `role_weight` int NULL DEFAULT NULL,
  `role_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('2023-03-09 10:05:39', '2023-03-09 10:05:42', NULL, 1, 100, '管理员');
INSERT INTO `roles` VALUES ('2023-03-09 10:05:59', '2023-03-09 10:06:02', NULL, 2, 10, '普通人员');

-- ----------------------------
-- Table structure for routers
-- ----------------------------
DROP TABLE IF EXISTS `routers`;
CREATE TABLE `routers`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `parent_id` int NULL DEFAULT NULL,
  `permission_weight` int NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `group_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `group_icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of routers
-- ----------------------------
INSERT INTO `routers` VALUES ('2023-03-26 10:28:16', '2023-03-26 10:28:20', NULL, 3, NULL, 50, 'admin', 'admin', 'adminManage', 'el-icon-s-check', '用户管理', 'admin', '系统管理', 'el-icon-s-check');
INSERT INTO `routers` VALUES ('2023-03-30 16:41:26', '2023-03-30 16:41:29', NULL, 6, NULL, 1, 'templateList', 'templateList', 'templateList', 'el-icon-s-grid', '画布列表', 'design', '功能界面', 'el-icon-s-grid');
INSERT INTO `routers` VALUES ('2023-03-30 16:45:46', '2023-03-30 16:45:48', NULL, 7, NULL, 1, 'componentList', 'componentList', 'componentList', 'el-icon-s-grid', '组件列表', 'design', '功能界面', 'el-icon-s-grid');

-- ----------------------------
-- Table structure for template_classification
-- ----------------------------
DROP TABLE IF EXISTS `template_classification`;
CREATE TABLE `template_classification`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `children_roleId` int NULL DEFAULT NULL COMMENT '标识该模块下的所属chart模版的属性号（对应）',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `children_roleId`(`children_roleId` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of template_classification
-- ----------------------------
INSERT INTO `template_classification` VALUES ('2023-04-03 15:39:59', '2023-04-03 15:40:03', NULL, 1, 'layout', '布局', 'chartList', 'el-icon-bell', 1);
INSERT INTO `template_classification` VALUES ('2023-04-03 15:40:53', '2023-04-03 15:40:55', NULL, 2, 'eCharts', 'eCharts', 'chartList', 'el-icon-menu', 2);
INSERT INTO `template_classification` VALUES ('2023-04-03 15:42:11', '2023-04-03 15:42:13', NULL, 3, 'decorate', '装饰', 'chartList', 'el-icon-s-open', 3);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `role_id` int NULL DEFAULT NULL,
  `group_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '所有组信息',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2023-03-29 09:27:47', '2023-03-29 09:27:47', NULL, 7, 'chengjiang_09@163.com', NULL, 'chengjiang_09@163.com', 1, '[0,1]');
INSERT INTO `users` VALUES ('2023-03-29 17:59:23', '2023-03-29 17:59:25', NULL, 8, '751937560@qq.com', NULL, '751937560@qq.com', 2, '[0,1]');

SET FOREIGN_KEY_CHECKS = 1;

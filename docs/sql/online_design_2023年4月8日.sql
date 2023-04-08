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

 Date: 08/04/2023 17:36:05
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
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of canvas_header_menu
-- ----------------------------
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:25:58', '2023-04-05 15:26:01', NULL, 1, '编辑模式', 'edit');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:30:38', '2023-04-05 15:30:40', NULL, 2, '阅览模式', 'reading');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:30:56', '2023-04-05 15:30:58', NULL, 3, '撤销', 'revoke');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:31:19', '2023-04-05 15:31:22', NULL, 4, '重做', 'redo');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:31:43', '2023-04-05 15:31:46', NULL, 5, '保存', 'save');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:32:00', '2023-04-05 15:32:03', NULL, 6, '实际阅览', 'actualReading');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:32:22', '2023-04-05 15:32:25', NULL, 7, '编辑画布', 'editCanvas');
INSERT INTO `canvas_header_menu` VALUES ('2023-04-05 15:32:49', '2023-04-05 15:32:51', NULL, 8, '完成绘制', 'complete');

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
  `group_id` json NULL COMMENT '通过组ID决定模板的显示对象',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `context` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `imgPath` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of charts
-- ----------------------------
INSERT INTO `charts` VALUES ('2023-04-08 14:59:47', '2023-04-08 14:59:47', NULL, 14, 'chengjiang_09@163.com', 7, 'chengjiang_09@163.com', 7, '[1]', '123', '789', NULL);
INSERT INTO `charts` VALUES ('2023-04-08 15:00:27', '2023-04-08 15:00:27', NULL, 15, 'chengjiang_09@163.com', 7, 'chengjiang_09@163.com', 7, '[1]', '123', '789', NULL);
INSERT INTO `charts` VALUES ('2023-04-08 16:30:03', '2023-04-08 16:30:03', NULL, 16, 'chengjiang_09@163.com', 7, 'chengjiang_09@163.com', 7, '[0]', '123', '789', NULL);

-- ----------------------------
-- Table structure for charts_data
-- ----------------------------
DROP TABLE IF EXISTS `charts_data`;
CREATE TABLE `charts_data`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `chart_id` int NULL DEFAULT NULL,
  `data` json NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `to_chart`(`chart_id` ASC) USING BTREE,
  CONSTRAINT `to_chart` FOREIGN KEY (`chart_id`) REFERENCES `charts` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of charts_data
-- ----------------------------
INSERT INTO `charts_data` VALUES ('2023-04-08 14:59:47', '2023-04-08 14:59:47', NULL, 1, 14, '{}');
INSERT INTO `charts_data` VALUES ('2023-04-08 15:00:27', '2023-04-08 15:00:27', NULL, 2, 15, '{}');
INSERT INTO `charts_data` VALUES ('2023-04-08 16:30:03', '2023-04-08 16:30:03', NULL, 3, 16, '{}');

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
  INDEX `to_template_classification`(`template_id` ASC) USING BTREE,
  CONSTRAINT `to_template_classification` FOREIGN KEY (`template_id`) REFERENCES `template_classification` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
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
-- Table structure for components_defaults
-- ----------------------------
DROP TABLE IF EXISTS `components_defaults`;
CREATE TABLE `components_defaults`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `components_id` int NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `to_components`(`components_id` ASC) USING BTREE,
  CONSTRAINT `to_components` FOREIGN KEY (`components_id`) REFERENCES `components` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of components_defaults
-- ----------------------------
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:49:55', '2023-04-03 15:49:57', NULL, 1, 1, 'configure', NULL, 'configureList', '容器配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:52:12', '2023-04-03 15:52:14', NULL, 2, 1, 'dataFrom', NULL, 'dataFromList', '数据源配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:52:47', '2023-04-03 15:52:49', NULL, 3, 2, 'configure', NULL, 'configureList', '布局配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:53:28', '2023-04-03 15:53:30', NULL, 4, 3, 'configure', NULL, 'configureList', '标题配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:56:27', '2023-04-03 15:56:29', NULL, 5, 4, 'configure', NULL, 'configureList', '折线图配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:57:13', '2023-04-03 15:57:15', NULL, 6, 4, 'position', NULL, 'configureList', '定位配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 15:58:12', '2023-04-03 15:58:16', NULL, 7, 4, 'dataFrom', NULL, 'dataFromList', '数据源配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 17:27:53', '2023-04-03 17:27:55', NULL, 8, 5, 'configure', NULL, 'configureList', '数据源配置');
INSERT INTO `components_defaults` VALUES ('2023-04-03 17:28:27', '2023-04-03 17:28:29', NULL, 9, 5, 'position', NULL, 'configureList', '定位配置');

-- ----------------------------
-- Table structure for components_defaults_configures
-- ----------------------------
DROP TABLE IF EXISTS `components_defaults_configures`;
CREATE TABLE `components_defaults_configures`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `defaults_id` int NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `disabled` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `jsonData` json NULL COMMENT '这个字段直接存例如echarts的静态数据',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `to_components_defaults`(`defaults_id` ASC) USING BTREE,
  CONSTRAINT `to_components_defaults` FOREIGN KEY (`defaults_id`) REFERENCES `components_defaults` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of components_defaults_configures
-- ----------------------------
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:03:36', '2023-04-03 16:03:38', NULL, 1, 1, '标题', 'title', 'configureInput', '容器标题', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:14:03', '2023-04-03 16:14:06', NULL, 2, 1, '背景图片url', 'backgroundImage', 'configureInput', NULL, NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:15:03', '2023-04-03 16:15:05', NULL, 3, 1, '背景颜色', 'backgroundColor', 'configureColor', 'rgba(0, 0, 0, 0)', NULL, '[\"#00ced1\", \"#1e90ff\", \"#c71585\", \"rgba(255, 69, 0, 0.68)\", \"rgb(255, 120, 0)\", \"hsv(51, 100, 98)\"]');
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:15:51', '2023-04-03 16:15:53', NULL, 4, 1, '背景透明度', 'opacity', 'configureInput', '1', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:16:42', '2023-04-03 16:16:45', NULL, 5, 1, '字体大小(px)', 'fontSize', 'configureInput', '16', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:17:17', '2023-04-03 16:17:19', NULL, 6, 1, '字体颜色', 'color', 'configureColor', '#000000', NULL, '[\"#00ced1\", \"#1e90ff\", \"#c71585\", \"rgba(255, 69, 0, 0.68)\", \"rgb(255, 120, 0)\", \"hsv(51, 100, 98)\"]');
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:21:39', '2023-04-03 16:21:41', NULL, 7, 3, '布局类型', 'item', 'configureLayoutConfig', 'scattered', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:23:39', '2023-04-03 16:23:42', NULL, 8, 4, '高度(%)', 'height', 'configureInput', '10', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:26:58', '2023-04-03 16:27:01', NULL, 9, 4, '标题', 'title', 'configureInput', '容器标题', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:27:33', '2023-04-03 16:27:36', NULL, 10, 4, '背景颜色', 'backgroundColor', 'configureColor', 'rgba(0, 0, 0, 0)', NULL, '[\"#00ced1\", \"#1e90ff\", \"#c71585\", \"rgba(255, 69, 0, 0.68)\", \"rgb(255, 120, 0)\", \"hsv(51, 100, 98)\"]');
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:28:15', '2023-04-03 16:28:18', NULL, 11, 4, '背景图片url', 'backgroundImage', 'configureInput', NULL, NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:28:48', '2023-04-03 16:28:50', NULL, 12, 4, '背景透明度', 'opacity', 'configureInput', '1', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:29:18', '2023-04-03 16:29:20', NULL, 13, 4, '字体大小(px)', 'fontSize', 'configureInput', '16', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:29:56', '2023-04-03 16:29:58', NULL, 14, 4, '字体颜色', 'color', 'configureColor', '#000000', NULL, '[\"#00ced1\", \"#1e90ff\", \"#c71585\", \"rgba(255, 69, 0, 0.68)\", \"rgb(255, 120, 0)\", \"hsv(51, 100, 98)\"]');
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:31:10', '2023-04-03 16:31:12', NULL, 15, 5, '标题配置', 'title', 'configureChartList', NULL, NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 16:59:59', '2023-04-03 17:00:01', NULL, 16, 6, '宽度(px)', 'width', 'configureInput', '500', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:09:04', '2023-04-03 17:09:06', NULL, 17, 6, '高度(px)', 'height', 'configureInput', '450', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:09:43', '2023-04-03 17:09:45', NULL, 18, 6, 'top(px)', 'top', 'configureInput', '0', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:10:28', '2023-04-03 17:10:31', NULL, 19, 6, 'left(px)', 'left', 'configureInput', '0', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:11:42', '2023-04-03 17:11:45', NULL, 20, 7, '静态数据源', 'staticData', NULL, '', NULL, '{\"xAxis\": {\"data\": [\"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\", \"Sun\"], \"type\": \"category\"}, \"yAxis\": {\"type\": \"value\"}, \"series\": [{\"data\": [150, 230, 224, 218, 135, 147, 260], \"type\": \"line\"}]}');
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:25:26', '2023-04-03 17:25:29', NULL, 21, 7, '动态数据源url', 'dynamicDataUrl', NULL, NULL, NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:26:19', '2023-04-03 17:26:22', NULL, 22, 8, '图片url', 'src', 'configureInput', 'https://img1.baidu.com/it/u=1795611050,2013221134&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800', NULL, NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:29:11', '2023-04-03 17:29:14', NULL, 23, 9, '宽度(px)', 'width', 'configureInput', '500', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:31:23', '2023-04-03 17:31:25', NULL, 24, 9, '高度(px)', 'height', 'configureInput', '450', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:31:48', '2023-04-03 17:31:51', NULL, 25, 9, 'top(px)', 'top', 'configureInput', '0', '1', NULL);
INSERT INTO `components_defaults_configures` VALUES ('2023-04-03 17:32:12', '2023-04-03 17:32:14', NULL, 26, 9, 'left(px)', 'left', 'configureInput', '0', '1', NULL);

-- ----------------------------
-- Table structure for components_defaults_configures_chart_value
-- ----------------------------
DROP TABLE IF EXISTS `components_defaults_configures_chart_value`;
CREATE TABLE `components_defaults_configures_chart_value`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `configures_id` int NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `to_components_defaults_configures`(`configures_id` ASC) USING BTREE,
  CONSTRAINT `to_components_defaults_configures` FOREIGN KEY (`configures_id`) REFERENCES `components_defaults_configures` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of components_defaults_configures_chart_value
-- ----------------------------
INSERT INTO `components_defaults_configures_chart_value` VALUES ('2023-04-03 16:35:35', '2023-04-03 16:35:38', NULL, 1, 15, '标题', 'text', 'configureInput', '折线图标题');
INSERT INTO `components_defaults_configures_chart_value` VALUES ('2023-04-03 16:37:35', '2023-04-03 16:37:38', NULL, 2, 15, '显示', 'show', 'configureSwitch', '1');
INSERT INTO `components_defaults_configures_chart_value` VALUES ('2023-04-03 16:40:58', '2023-04-03 16:41:00', NULL, 3, 15, '标题超链接', 'link', 'configureInput', NULL);
INSERT INTO `components_defaults_configures_chart_value` VALUES ('2023-04-03 16:41:23', '2023-04-03 16:41:25', NULL, 4, 15, '标题样式', 'textStyle', 'configureChartList', NULL);

-- ----------------------------
-- Table structure for components_defaults_configures_chart_value_details
-- ----------------------------
DROP TABLE IF EXISTS `components_defaults_configures_chart_value_details`;
CREATE TABLE `components_defaults_configures_chart_value_details`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `value_id` int NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `component` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `jsonData` json NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `to_configures_chart_value`(`value_id` ASC) USING BTREE,
  CONSTRAINT `to_configures_chart_value` FOREIGN KEY (`value_id`) REFERENCES `components_defaults_configures_chart_value` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of components_defaults_configures_chart_value_details
-- ----------------------------
INSERT INTO `components_defaults_configures_chart_value_details` VALUES ('2023-04-05 07:42:50', '2023-04-05 07:42:54', NULL, 1, 4, '字体颜色', 'configureColor', 'color', '#000000', '[\"#00ced1\", \"#1e90ff\", \"#c71585\", \"rgba(255, 69, 0, 0.68)\", \"rgb(255, 120, 0)\", \"hsv(51, 100, 98)\"]');

-- ----------------------------
-- Table structure for components_defaults_configures_layout
-- ----------------------------
DROP TABLE IF EXISTS `components_defaults_configures_layout`;
CREATE TABLE `components_defaults_configures_layout`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `configures_id` int NULL DEFAULT NULL,
  `label` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `value` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `to_components_defaults_configures_layout`(`configures_id` ASC) USING BTREE,
  CONSTRAINT `to_components_defaults_configures_layout` FOREIGN KEY (`configures_id`) REFERENCES `components_defaults_configures` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of components_defaults_configures_layout
-- ----------------------------
INSERT INTO `components_defaults_configures_layout` VALUES ('2023-04-03 16:24:04', '2023-04-03 16:24:07', NULL, 1, 7, '散布局', 'scatteredLayout', 'scattered');
INSERT INTO `components_defaults_configures_layout` VALUES ('2023-04-03 16:25:07', '2023-04-03 16:25:08', NULL, 2, 7, '左右布局', 'leftAndRightLayout', 'leftAndRight');
INSERT INTO `components_defaults_configures_layout` VALUES ('2023-04-03 16:25:47', '2023-04-03 16:25:50', NULL, 3, 7, '网格布局', 'gridLayout', 'grid');

-- ----------------------------
-- Table structure for groups
-- ----------------------------
DROP TABLE IF EXISTS `groups`;
CREATE TABLE `groups`  (
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of groups
-- ----------------------------
INSERT INTO `groups` VALUES ('2023-03-09 09:58:48', '2023-03-09 09:58:58', NULL, 0, '个人');
INSERT INTO `groups` VALUES ('2023-03-09 09:59:27', '2023-03-09 09:59:31', NULL, 1, '所有人');
INSERT INTO `groups` VALUES ('2023-03-09 09:59:49', '2023-03-09 09:59:53', NULL, 2, '其他人');

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
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `type`(`type` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of template_classification
-- ----------------------------
INSERT INTO `template_classification` VALUES ('2023-04-03 15:39:59', '2023-04-03 15:40:03', NULL, 1, 'layout', '布局', 'chartList', 'el-icon-bell');
INSERT INTO `template_classification` VALUES ('2023-04-03 15:40:53', '2023-04-03 15:40:55', NULL, 2, 'eCharts', 'eCharts', 'chartList', 'el-icon-menu');
INSERT INTO `template_classification` VALUES ('2023-04-03 15:42:11', '2023-04-03 15:42:13', NULL, 3, 'decorate', '装饰', 'chartList', 'el-icon-s-open');

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
  `group_id` json NULL COMMENT '所有组信息',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2023-03-29 17:59:23', '2023-03-29 17:59:25', NULL, 8, '751937560@qq.com', NULL, '751937560@qq.com', 2, NULL);
INSERT INTO `users` VALUES ('2023-04-08 11:05:24', '2023-04-08 11:05:24', NULL, 9, 'chengjiang_09@163.com', NULL, 'chengjiang_09@163.com', 1, NULL);

SET FOREIGN_KEY_CHECKS = 1;

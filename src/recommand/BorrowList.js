import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ListView,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

var dimensions = require("Dimensions");
//获取屏幕的宽度
var { width } = dimensions.get("window");
import { px2dp, SCREEN_WIDTH } from "../utils";
const recommandList = {
  res: [
    {
      Book_num: 6,
      Book_name: "疯狂Java讲义（第3版 附光盘）",
      Writer: "李刚 著",
      Sort_id: 2,
      Price: 91.3,
      Pub_company: "电子工业出版社",
      Pub_date: "2014-06-30T16:00:00.000Z",
      Total_num: 10,
      Current_num: 6,
      Buy_date: "2016-01-09T16:00:00.000Z",
      Brief: "IT图书作家李刚老师针对Java 8推出的全新升级版；",
      imageName:"https://img10.360buyimg.com/n1/jfs/t1/26339/8/10661/124305/5c8af829E4470835f/99742c91174d3d7a.jpg"
    },
    {
      Book_num: 7,
      Book_name:"轻量级Java EE企业应用实战：Struts2+Spring4+Hibernate整合开发（第4版 附CD光盘）",
      Writer: "李刚 著",
      Sort_id: 2,
      Price: 93.6,
      Pub_company: "电子工业出版社",
      Pub_date: "2014-09-30T16:00:00.000Z",
      Total_num: 10,
      Current_num: 9,
      Buy_date: "2016-01-10T16:00:00.000Z",
      Brief:"国内知名IT图书作家李刚老师基于曾荣获中国书刊发行业协会“年度全行业**畅销品种”大奖的《轻量级Java EE企业应用实战（第3版）》全新升级；\n　　本书内容升级到Struts 2.3、Spring 4.0、Hibernate 4.3；全书所有示例基于Java 8、Hibernate注解进行全面升级；\n　　《轻量级Java EE企业应用实战》新增Maven、SVN、Tomcat 8.0、Eclipse luna（4.4）等知识；\n　　数百个小型案例及完整的工作流系统综合案例帮读者领略S2SH开发精髓；\n　　《轻量级Java EE企业应用实战》被多所“985”“211”院校选作教材；\n　　最受程序员欢迎、影响力*大的国人原创S2SH应用开发必读经典。",
      imageName:"https://img10.360buyimg.com/n1/jfs/t1/26339/8/10661/124305/5c8af829E4470835f/99742c91174d3d7a.jpg"
    }
  ],
  state: 1
};
export default class BorrowList extends Component {
  static defaultProps = {
    url: "http://47.106.245.58:15515/getBorrowBook?id="
  };

  constructor(props) {
    super(props);
    //1.初始化ListView.DataSource数据源
    this.state = {
      data: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  }

  //渲染完成，请求网络数据
  componentDidMount() {
      var json  = recommandList.res;
    this.setState({
      data: this.state.data.cloneWithRows(json)
    });
    // const url = this.props.url + this.props.userId;
    // fetch(url)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         //解析json数据
    //         var json = response['res'];
    //         //更新状态机
    //         this.setState({
    //             data: this.state.data.cloneWithRows(json),
    //         });
    //     })
    //     .catch((error) => {
    //         if (error) {
    //             //网络错误处理
    //             console.log('error', error);
    //         }
    //     })
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.data}
          //相当于Android中Adapter的getView 渲染每一个Item
          renderRow={this.getView}
        />
      </View>
    );
  }

  /**
   * renderRow中可以使用的参数(rowData, sectionID, rowID, highlightRow)
   * @param rowData
   * @returns {XML}
   */
  getView(rowData) {
    //这里返回的就是每个Item
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.item}>
          {/*左边的图片*/}
          <Image source={{ uri: rowData.imageName }} style={styles.image} />
          <View style={styles.left}>
            {/*右边的View*/}
            <Text style={{ marginTop: 15, color: "#333333" }}>
              {rowData.Book_name}
            </Text>
            <Text style={{ marginTop: 15, color: "#333333" }}>
              {rowData.Writer}
            </Text>
            <View style={styles.content}>
              <Text style={{ flex: 1, textAlign: "left" }}>
                {rowData.Pub_company}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF"
  },
  item: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#e9e9e9",
    width: SCREEN_WIDTH
  },
  image: {
    width: 90,
    height: 90,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  left: {
    flex: 1,
    marginLeft: 8,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  //让 Text 水平方向充满容器
  content: {
    marginTop: 15,
    marginRight: 16,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

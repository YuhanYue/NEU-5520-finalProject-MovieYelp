import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView, Alert, TouchableOpacity, Image, Dimensions, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Parse from "parse/react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
    "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
    "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const width = Dimensions.get("window").width;
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pairedImageData: null,
            dehazeCount: 0,
            postPress: true,
            galleryPress: false,
            profilePic: "https://picsum.photos/id/200/200/200",
            userBio: "I am on Movie Yelp now!",
            userName: "Dog Lover",
            userEmail: "myemail@email.com",
            image: null,
            userPost: [],
            userPostDate: [],
        };
        this.onRetrieveProfile();
    }


    onRetrieveProfile = async () => {
        console.log("update");
        const query = new Parse.Query("Users");
        query.equalTo("email", this.props.user.get("email"));
        const reviewQuery = new Parse.Query("review");
        reviewQuery.equalTo("email", this.props.user.get("email"));
        var profilePic = null,
            userPost = [],
            userPostDate = [];
        var userBio = "",
            userName = "",
            userEmail = "";
        try {
            const object = await query.find();
            const person = object[0];
            const reviewObject = await reviewQuery.find();
            for (let i = 0; i < reviewObject.length; i++) {
                userPost.push(reviewObject[i].get("photo").url());
                var date = reviewObject[i].get("createdAt");
                let theDate = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
                userPostDate.push(theDate);
            }
            userBio = person.get("userBio");
            userName = person.get("userName");
            userEmail = person.get("email");
            profilePic = person.get("avatar").url();

        } catch ( error ) {
            alert(`Failed to retrieve the object, with error code: ${error.message}`);
        }
        // console.log(userEmail  +" name:" + userName);
        this.setState({
            profilePic: profilePic,
            userBio: userBio,
            userName: userName,
            userEmail: userEmail,
            userPost: userPost,
            userPostDate: userPostDate,
        });

    };
    morePress = () => {
        Alert.alert("MORE", "What's more?", [
            {
                text: "Edit profile"
            },
            {
                text: "Open Setting"
            },
            {
                text: "Close"
            },
        ]);
    };

    myPostBress = () => {
        this.setState({
            postPress: true,
            galleryPress: false,
        });
    };

    myGalleryBress = () => {
        this.setState({
            postPress: false,
            galleryPress: true,
        });
    };

    pickImage = async () => {
        let response = await ImagePicker.launchImageLibraryAsync({
            mediaType: "photo",
            base64: true,
        });
        // Add selected image to the state
        this.setState({
            image: response,
        });
        this.uploadImage();
    };

    uploadImage = async () => {
        const base64 = this.state.image.base64;

        const parseFile = new Parse.File("avatar.jpg", {
            base64
        });
        try {
            const responseFile = await parseFile.save();
            const query = new Parse.Query("Users");
            query.equalTo("email", this.props.user.get("email"));
            const object = await query.find();
            const person = object[0];
            person.set("avatar", responseFile);
            await person.save();
            Alert.alert("The file has been saved to Back4app.");
        } catch ( error ) {
            console.log(
                "The file either could not be read, or could not be saved to Back4app.",
                error.message
            );
        }
    };

    postPics = () => {
        var res = this.state.userPost;
        var date = this.state.userPostDate;
        var table = [];
        if (this.state.postPress) {
            for (var i = 0; i < res.length; i++) {
                table.push(
                    <View style={{
                        marginLeft: 20,
                        height: 250,
                        elevation: 10,
                        width: width - 40,
                        marginRight: 20,
                        padding: 15,
                        borderRadius: 20,
                        marginTop: 20,
                        backgroundColor: '#fff'
                    }}>
            { /* House image */ }
            <Image source={{
                        uri: res[i]
                    }} style={styles.cardImage} />
            <View style={{
                        marginTop: 0
                    }}>
              { /* Title and price container */ }
              <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}>
                <Text style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: "grey"
                    }}>
                  📅 Post Date: {this.state.userPostDate[i]}
                </Text>
              </View>

              <View style={{
                        marginTop: 10,
                        flexDirection: 'row'
                    }}>
                <View style={styles.facility}>
                  <Icon name="visibility" size={20} />
                  <Text style={styles.facilityText}>2</Text>
                </View>
                <View style={styles.facility}>
                  <Icon name="recommend" size={20} />
                  <Text style={styles.facilityText}>2</Text>
                </View>
              </View>
            </View>
          </View>

                )
            }
        }
        return table;
    };

    galleryPics = () => {
        var res = this.state.userPost;
        var ans = [];
        if (this.state.galleryPress) {
            for (var i = 0; i < res.length; i += 2) {
                var table = [];
                if (i + 1 < res.length) {
                    table.push(
                        <View
                        key={i.toString()}
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        >
              {
                        <Image
                        source={{
                            uri: res[i],
                        }}
                        style={{
                            width: 175,
                            height: 175,
                            borderRadius: 10,
                            margin: 10,
                        }}
                        />
                        }
              {
                        <Image
                        source={{
                            uri: res[i + 1],
                        }}
                        style={{
                            width: 175,
                            height: 175,
                            borderRadius: 10,
                            margin: 10,
                        }}
                        />
                        }
            </View>
                    );
                } else {
                    table.push(
                        <View
                        key={i.toString()}
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                        >
              {
                        <Image
                        source={{
                            uri: res[i],
                        }}
                        style={{
                            width: 175,
                            height: 175,
                            borderRadius: 10,
                            margin: 10,
                        }}
                        />
                        }
            </View>
                    );
                }
                ans.push(
                    <View
                    key={(i * 100).toString()}
                    style={{
                        flexDirection: "row",
                        alignContent: "center"
                    }}
                    >
            {table}
          </View>
                );
            }
        }
        return ans;
    };

    render() {
        var height = 0;
        if (this.state.postPress) {
            height = this.state.userPost.length * 1000;
        } else {
            height = this.state.userPost.length * 325;
        }

        return (
            <View>
        <View >
          { /* <Text> This is a profile page</Text> */ }
          <View style={{
                paddingVertical: 20,
                alignItems: 'center',
                height: 200,
                width: "100%",
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: "flex-end",
                // marginLeft: 10//center

                borderBottomStartRadius: 180,
                borderBottomEndRadius: 180,
                backgroundColor: "#F8E7B4",

            }}>
            <TouchableOpacity
            onPress={() => {
                this.pickImage();
            }}>
              <Image
            source={{
                uri: this.state.profilePic
            }}
            style={styles.avatar}
            />
            </TouchableOpacity>
            <Text style={styles.userName}>{this.state.userName}</Text>
            <Text style={{
                color: "black",
                textAlign: 'center'
            }}>{this.state.userEmail}</Text>
          </View>
          <View style={{
                paddingVertical: 10,

            }}>
            <Text style={{
                fontWeight: "600",
                textAlign: "left"
            }}>
              ✨ ABOUT ME
            </Text>
            <Text style={{
                color: "grey",
                fontWeight: "600",
                marginTop: 5
            }}>
              ✉️ {this.state.userBio}
            </Text>
            <View>
              <Ionicons
            name="location-outline"
            style={{
                color: "grey",
                padding: 10
            }}
            >
                Vancouver, Birtish Columbia
              </Ionicons>
            </View>
          </View>


          { /*This is the status bar: */ }
          <View style={{
                flexDirection: "row",
            }}>
            <View
            style={{
                flex: 1,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgrey",
            }}
            >
              <TouchableOpacity
            onPress={() => {
                this.myPostBress();
                this.onRetrieveProfile();
            }}
            >
                <Ionicons
            name="add-circle"
            style={{
                color: "#F8E7B4"
            }}
            size={24}
            />
              </TouchableOpacity>
              <Text style={{
                color: "grey"
            }}>My Reviews</Text>
            </View>
            <View
            style={{
                flex: 1,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgrey",
            }}
            >
              <TouchableOpacity
            onPress={() => {
                this.myGalleryBress();
                this.onRetrieveProfile();
            }}
            >
                <Ionicons
            name="images"
            style={{
                color: "#F8E7B4"
            }}
            size={24}
            />
              </TouchableOpacity>
              <Text style={{
                color: "grey"
            }}>My Gallery</Text>
            </View>
            <View
            style={{
                flex: 1,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgrey",
            }}
            >
              <TouchableOpacity onPress={this.morePress}>
                <Ionicons
            name="ellipsis-horizontal"
            style={{
                color: "#F8E7B4"
            }}
            size={24}
            />
              </TouchableOpacity>
              <Text style={{
                color: "grey"
            }}>More</Text>
            </View>
          </View>


          { /*This is the display/post view: */ }
          <View style={{
                margin: 2,
                borderColor: 'F2EEE5'
            }}>
            <ScrollView >
              <View style={{
                height: height
            }}>
                {this.state.postPress ? this.postPics() : this.galleryPics()}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "500",
    },
    row: {
        flexDirection: "row",
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
        borderTopColor: "#dddddd",
        borderTopWidth: 1,
        flexDirection: "row",

        justifyContent: "center",
        alignItems: "center",
    },
    infoBox: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userTitle: {
        fontSize: 16,
        color: "#b8bece",
        fontWeight: "500",
        justifyContent: 'center',
    },
    userName: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 0,

    },
    reviewContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    thumbnail: {
        width: 150,
        height: 150,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    relatedMoviesSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfo: {
        fontSize: 20,
        fontWeight: "bold",
        flexDirection: 'row',
    },
    reviewBody: {
        fontSize: 15,
        flexDirection: 'row',

    },
    reviewPart: {
        flexDirection: 'column',
    },
    submitContainer: {
        borderRadius: 100,
        width: '60%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: "#C3E2DD"
    },
    submit: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10,
    },
    bottomWrapper: {
        flexDirection: 'row',
    },
    card: {

    },
    cardImage: {
        width: '100%',
        height: 175,
        borderRadius: 15,
    },
    facility: {
        flexDirection: 'row',
        marginRight: 15
    },
    facilityText: {
        marginLeft: 5,
        color: '#97CAE5'
    },
    parent: {
        height: '80%',
        width: '100%',
        backgroundColor: 'pink',

        borderBottomStartRadius: 200,
        borderBottomEndRadius: 200,
        overflow: 'hidden',
    },
    child: {
        flex: 1,
        transform: [{
            scaleX: 0.5
        }],

        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    }

});



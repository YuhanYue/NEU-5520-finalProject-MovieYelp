export default class addReview extends React.PureComponent {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: "Yuhan",
  //   };
  // }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.modalVisible}
      >
        <View style={styles.reviewContainer}>
          <Text>Please input your review about this shooting place:</Text>
          <TextInput
            style={{ height: 100, borderColor: "gray", borderWidth: 2 }}
            maxLength={200}
            multiline
            numberOfLines={4}
          />
          <TouchableOpacity
            style={[styles.submitContainer, { backgroundColor: "#0251ce" }]}
            onPress={() => {}}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.submitContainer, { backgroundColor: "#0251ce" }]}
            onPress={() => {
              this.openImagePickerAsync();
            }}
          >
            <Text style={styles.submitText}>Upload Images</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.setState({
                modalVisible: this.state.modalVisible == true ? false : true,
              })
            }
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

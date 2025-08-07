import { Image, Pressable, StyleSheet, Text, View } from "react-native";



export default function Index() {
  return (
    <View
      style={styles.container}>

      <Image source={require('./pomodoro.png')}/>

      <View style={styles.actions}>
        <View style={styles.context}>

          <View>
            <Pressable style={styles.contextButtonActive}>
              <Text style={styles.contextButtonText}>
                Foco
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable>
              <Text style={styles.contextButtonText}>
                Pausa Curta
              </Text>
            </Pressable>
          </View>

          <View>
            <Pressable>
              <Text style={styles.contextButtonText}>
                Pausa Longa
              </Text>
            </Pressable>
          </View>
        </View>

        

        <Text style={styles.timer}>
          25:00
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício sem fins comerciais,
        </Text>

        <Text style={styles.footerText}>
          Desenvolvido por Gabriel Barsani
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    backgroundColor: '#021123',
    gap: 40
  },

  actions: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor:"#144480",
    gap: 22
  },

  context: {
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center" 
  },

  contextButtonText: {
    fontSize: 12.5,
    color: "#FFF",
    padding: 8
  },

  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8
  },

  timer: {
    fontSize: 54,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center"
  },

  button: {
    backgroundColor: "#B872FF", 
    borderRadius: 10,
    padding: 32,
  },
  buttonText: {
    textAlign: "center",
    color: "#021123",
    fontSize: 18
  },

  footer: {
    width: "80%",
  },

  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 12.5
  }
  
});

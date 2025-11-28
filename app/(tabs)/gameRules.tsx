import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


export default function GameRules() {
  return (
      <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={{ flex: 1, padding: 50, marginBottom: 20, backgroundColor: 'rgba(18,17,73,1.00)' }}>
          <Text style={styles.text}>
                Catch the Hack!
              </Text>
              <Text style={styles.text}>
                Team 4 - Bordeaux: Eliott Colin, Fanny Pikientio, Charlène Billat, Kealii Gosset
              </Text>
              <Text style={styles.text}>
                Topic: Cybersecurity (inspiration: the board game Werewolf)
              </Text>
        
              <Text style={styles.text}>· Included:</Text>
              <Text style={styles.text}>- x50 Firewall security cards (quiz questions)</Text>
              <Text style={styles.text}>- x20 Roles cards</Text>
        
              <Text style={styles.text}>· Max players:</Text>
              <Text style={styles.text}>5</Text>
        
              <Text style={styles.text}>· The starting player:</Text>
              <Text style={styles.text}>
                The last player who has been scammed starts the game or the youngest player.
              </Text>
        
              <Text style={styles.text}>· Objective:</Text>
              <Text style={styles.text}>
                You have to reach the end of the game with the highest level of card.
              </Text>
        
              <Text style={styles.text}>· Rules:</Text>
              <Text style={styles.text}>
                You start the game with one role card, representing a corporate role. Each role has a hierarchical level, the
                Hacker being the highest and the Trainee the lowest.
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>Step 1:</Text> On a player’s turn, they must first answer a question from
                the quiz decks (the firewall security). The quiz deck is divided into three different packs with increasing
                difficulty: level 1, level 2, and level 3. Each player begins at level 1.
              </Text>
              <Text style={styles.text}>
                If the answer is correct, the player keeps the question card next to them. They have validated one level card
                (they must validate two cards from a level to move to the next level). Then they draw a card from the role deck.
              </Text>
              <Text style={styles.text}>
                If the answer is incorrect, they do not validate the level card and do not draw a role card. The next player
                begins their turn.
              </Text>
              <Text style={styles.text}>
                <Text style={{ fontWeight: "bold" }}>Step 2:</Text> If the player answers correctly, they draw one card from the
                role deck. At this point, the player has two role cards in hand. They must choose one to keep secretly and
                discard the other. The discarded card is revealed to all players.
              </Text>
              <Text style={styles.text}>
                Each card has a special power, which the player may activate when the card is discarded. The player’s turn ends
                once the power is played. The next player may then draw a card from their firewall security level.
              </Text>
              <Text style={styles.text}>
                When the role deck is depleted, the game ends. Your goal is to ensure that the hidden card you hold has the
                highest role: if the Hacker is still in the game, they win; else, if the Engineers are still in the game, one of
                them wins; ...
              </Text>
        
              <Text style={styles.text}>· Roles:</Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>Hacker x1 (level 6):</Text> Keep this card secret. If you discard it, you
                instantly lose and must quit the game. If you hold this hidden card until the end, you win the game.
              </Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>Cybersecurity Engineer x2 (level 5):</Text> When revealed, you may switch
                your hidden card with that of another player of your choice.
              </Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>HR x2 (level 4):</Text> When revealed, you may look at the hidden card of
                another player of your choice.
              </Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>Lead Tech x2 (level 3):</Text> When revealed, no one can interact with
                your hidden card for one turn (no switching, looking, discarding, guessing, or Joker effects).
              </Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>Data Analyst x2 (level 2):</Text> When revealed, you may choose yourself
                or another player to discard their hidden card and draw a new one from the deck. (If the CEO is discarded this
                way, that player loses.)
              </Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>Trainee x4 (level 1):</Text> When revealed, you may guess the role of
                another player. If correct, that player must quit the game.
              </Text>
              <Text style={styles.text}>
                - <Text style={{ fontWeight: "bold" }}>Joker x2 (no level):</Text> If you draw a Joker, you must play it
                immediately using the digital app, which will randomly choose an action.
              </Text>
        
              <Text style={styles.text}>· Add-on:</Text>
              <Text style={styles.text}>
                The app runs after a player draws a Joker card. It may randomly assign one of the following powers:
              </Text>
              <Text style={styles.text}>
                - On your next turn, you may draw a role card without answering a question.
              </Text>
              <Text style={styles.text}>
                - Everyone must switch their hidden card with the player to their left.
              </Text>
              <Text style={[styles.text, { marginBottom: 150 }]}>
                - You may look at the top two cards of the deck and then return them to the bottom of the deck.
              </Text>
        </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text : {
    fontSize: 14,
    color : 'white'
  }
});
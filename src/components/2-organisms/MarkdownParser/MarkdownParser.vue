<script>
import { Fragment } from 'vue-fragment';

const marked = require('marked');

export default {
  name: 'MarkdownParser',
  components: { Fragment },
  props: {},
  data() {
    return {};
  },
  methods: {
    trimLines(lines) {
      return lines.split('\n')
        .map((line) => {
          return line.trim();
        }).join('\n');
    },
    parseMarkdown(nodes) {
      return marked(nodes);
    }
  },
  render(h) {
    return h('div', this.$slots.default.map((slot) => {
      const isMarkdown = !slot.tag;
      if (isMarkdown) {
        return h('div', {
          domProps: {
            innerHTML: this.parseMarkdown(
              this.trimLines(slot.text)
            )
          }
        });
      }
      return slot;
    }));
  }
};
</script>

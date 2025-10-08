<template>
  <div class="posts-container">
    <h1>Posts from JSONPlaceholder</h1>

    <!-- Loading state -->
    <div v-if="loading" class="loading">Loading posts...</div>

    <!-- Posts table -->
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in currentPosts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.userId }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination controls -->
      <div class="pagination">
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="pagination-btn"
        >
          Previous
        </button>

        <span class="page-info">
          Page {{ currentPage }} of {{ totalPages }}
        </span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarketplaceApp",
  props: {
    sharedData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      posts: [],
      loading: false,
      currentPage: 1,
      postsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    currentPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      const end = start + this.postsPerPage;
      return this.posts.slice(start, end);
    },
  },
  async mounted() {
    this.sharedData.eventBus.on("test-event", (message) => {
      this.showNotification(message + " but this is the Posts App");
    });
    await this.fetchPosts();
  },
  methods: {
    showNotification(message) {
      // Create notification element
      const notification = document.createElement("div");
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3b82f6;
        color: white;
        padding: 12px 16px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        max-width: 300px;
        word-wrap: break-word;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
      `;
      notification.textContent = message;
      document.body.appendChild(notification);

      // Animate in
      requestAnimationFrame(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateX(0)";
      });

      // Auto-remove after 3 seconds
      setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 300);
      }, 3000);
    },
    async fetchPosts() {
      this.loading = true;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = await response.json();
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.posts-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
}

.table {
  width: 100%;
  border-spacing: 0;
  color: #363636;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.table th,
.table td {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  padding: 12px 16px;
  text-align: left;
}

.table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #495057;
  user-select: none;
}

.table tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.02);
}

.table tr:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.table td:last-child {
  max-width: 300px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 20px;
}

.pagination-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  background-color: #0056b3;
}

.pagination-btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.page-info {
  font-weight: 500;
  color: #495057;
  font-size: 16px;
}
</style>

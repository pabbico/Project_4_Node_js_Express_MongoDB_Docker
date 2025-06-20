```markdown
A production-ready Dockerized Node.js API with Express.js and MongoDB, featuring:
-  Containerized development and production environments
-  MongoDB with persistent storage
-  Health check endpoints
-  Hot-reloading in development
-  Optimized multi-stage Docker builds

## Quick Start

### Prerequisites
- Docker ([Install](https://docs.docker.com/get-docker/))
- Docker Compose ([Install](https://docs.docker.com/compose/install/))

### Development Mode
```bash
# Start with hot-reloading
docker-compose -f docker-compose.dev.yml up
```

### Production Mode
```bash
# Build and start production containers
docker-compose -f docker-compose.prod.yml up --build
```

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Check API and DB status |
| `/api/users` | GET | Sample user endpoint |

## Project Structure
```
nodejs-mongo-docker/
├── src/
│   ├── app.js              # Main application
│   ├── routes/             # API endpoints
│   │   ├── users.js        # User routes
│   │   └── health.js       # Health check
│   └── models/             # MongoDB models
├── docker-compose.dev.yml  # Development config
├── docker-compose.prod.yml # Production config
├── Dockerfile.dev          # Development Dockerfile
├── Dockerfile.prod         # Production Dockerfile
├── .env.example            # Environment variables template
└── README.md               # This file
```

## Configuration
### Environment Variables
Create `.env` file from the example:
```bash
cp .env.example .env
```
Edit with your credentials:
```ini
MONGO_URI=mongodb://mongo:27017/yourdb
PORT=3000
```

## Docker Commands
| Command | Description |
|---------|-------------|
| `docker-compose logs -f` | View container logs |
| `docker-compose down -v` | Stop and remove containers+volumes |
| `docker exec -it mongo mongosh` | Access MongoDB shell |

## 🔍 Health Checks
Verify your API and database status:
```bash
curl http://localhost:3000/api/health
```
Expected response:
```json
{
  "status": "OK",
  "db": "connected"
}
```

## Troubleshooting
| Issue | Solution |
|-------|----------|
| MongoDB connection fails | Check `.env` MONGO_URI and container logs |
| Health check shows "disconnected" | Verify MongoDB container is running |
| Port conflicts | Change `ports` in compose files |
| Hot-reload not working | Ensure volumes are mounted in dev config |

## Security Best Practices
1. Never commit `.env` files
2. Use strong MongoDB credentials
3. Regularly update Docker images
4. Implement rate limiting in production

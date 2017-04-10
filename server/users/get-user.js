export async function getUser(ctx, next) {
  ctx.response.body = 'user';
  ctx.response.status = 201;
}
module.exports = function(state) {
	return async function(ctx, next) {
		Object.assign(ctx.state, state);
		await next();
	};
};

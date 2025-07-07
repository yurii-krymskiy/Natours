/* eslint-disable node/no-unsupported-features/es-syntax */
class APIFeatures {
  constructor(mongooseQuery, routeQuery) {
    this.mongooseQuery = mongooseQuery;
    this.routeQuery = routeQuery;
  }

  filter() {
    const queryObj = { ...this.routeQuery };
    const excludedFields = ['page', 'limit', 'sort', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.routeQuery.sort) {
      const sortBy = this.routeQuery.sort.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort('-createdAt');
    }
    return this;
  }

  limitFields() {
    if (this.routeQuery.fields) {
      const fields = this.routeQuery.fields.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select('-__v');
    }
    return this;
  }

  paginate() {
    const page = +this.routeQuery.page || 1;
    const limit = +this.routeQuery.limit || 100;
    const skip = (page - 1) * limit;

    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    return this;
  }
}

module.exports = APIFeatures;

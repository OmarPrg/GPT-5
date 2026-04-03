# Task: Loading Page and Lazy Loading Implementation

- [ ] Create `Loading` component
    - [ ] `src/components/loading/Loading.tsx`
    - [ ] `src/components/loading/Loading.css`
- [ ] Update Exports
    - [ ] `src/components/index.ts`
- [ ] Implement Lazy Loading in `App.tsx`
    - [ ] Use `React.lazy()` for all modules
    - [ ] Wrap components in `Suspense` with `Loading` fallback
- [ ] Image Optimization
    - [ ] `src/components/header/Header.tsx`
    - [ ] `src/components/blog/Blog.tsx`
    - [ ] `src/components/brand/Brand.tsx`
- [ ] Verification
    - [ ] Run `npm run dev` and test loading screen
    - [ ] Check Network tab for lazy chunks
